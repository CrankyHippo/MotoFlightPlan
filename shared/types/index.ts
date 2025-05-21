export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ride {
  id: string;
  name: string;
  description?: string;
  startPoint: GeoPoint;
  endPoint: GeoPoint;
  waypoints: GeoPoint[];
  distance: number;
  duration: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GeoPoint {
  lat: number;
  lng: number;
  name?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SharedRide {
  id: string;
  rideId: string;
  userId: string;
  createdAt: Date;
  expiresAt: Date;
}

export interface Tracking {
  id: string;
  rideId: string;
  status: 'active' | 'completed' | 'cancelled';
  startTime: Date;
  endTime?: Date;
  location?: GeoPoint;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
} 