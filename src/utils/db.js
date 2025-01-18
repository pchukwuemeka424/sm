import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error('MongoDB connection string (MONGO_URI) is not defined');
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connection.readyState === 1;
    console.log(`MongoDB connected: ${db.connection.name}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Could not connect to MongoDB');
  }
};
