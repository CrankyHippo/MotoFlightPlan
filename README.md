# MotoFlightPlan 🏍️

A comprehensive motorcycle route planning and safety application that helps riders plan, track, and share their journeys with trusted contacts.

## Features

- 🗺️ Interactive route planning with Mapbox integration
- 📍 Save and edit rides with custom waypoints
- 🔗 Shareable ride links for emergency contacts
- 📱 Real-time GPS tracking with offline support
- ⚠️ Safety alerts for route deviations and connection loss
- 📊 Dashboard with ride history and statistics

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS
- **Maps**: Mapbox
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io
- **Mobile**: React Native (coming soon)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Mapbox API key
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MotoFlightPlan.git
cd MotoFlightPlan
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# Frontend (.env.local)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_API_URL=http://localhost:3001

# Backend (.env)
DATABASE_URL=postgresql://user:password@localhost:5432/motoflightplan
JWT_SECRET=your_jwt_secret
MAPBOX_TOKEN=your_mapbox_token
```

4. Start the development servers:
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

## Project Structure

```
MotoFlightPlan/
├── frontend/           # Next.js frontend application
├── backend/           # Express backend server
├── mobile/           # React Native mobile app (coming soon)
└── shared/           # Shared types and utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Mapbox for the mapping platform
- Next.js team for the amazing framework
- All contributors and supporters of the project 