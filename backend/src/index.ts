import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Initialize Prisma client
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Handle ride tracking updates
  socket.on('track-ride', async (data) => {
    const { rideId, location } = data;
    
    try {
      // Update tracking information in database
      await prisma.tracking.update({
        where: { rideId },
        data: {
          location,
          updatedAt: new Date(),
        },
      });

      // Broadcast location update to all clients tracking this ride
      socket.broadcast.emit(`ride-${rideId}`, { location });
    } catch (error) {
      console.error('Error updating ride tracking:', error);
      socket.emit('error', { message: 'Failed to update ride tracking' });
    }
  });

  // Handle ride sharing
  socket.on('share-ride', async (data) => {
    const { rideId, userId } = data;
    
    try {
      // Create shared ride record
      const sharedRide = await prisma.sharedRide.create({
        data: {
          rideId,
          userId,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
        },
      });

      // Notify relevant users
      socket.broadcast.emit(`shared-ride-${userId}`, { sharedRide });
    } catch (error) {
      console.error('Error sharing ride:', error);
      socket.emit('error', { message: 'Failed to share ride' });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 