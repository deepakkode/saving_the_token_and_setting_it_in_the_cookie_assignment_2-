import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const encrypt = (payload) => {
  // Create a JWT with the payload and secret
  // Set expiry from environment variable
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  return token;
};

// Function to verify token
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
};

// Example usage:
const payload = {
  userId: 123,
  username: 'testuser'
};

const token = encrypt(payload);
console.log('Generated JWT:', token);

// Test the verification
const decoded = verifyToken(token);
console.log('Decoded token:', decoded);
