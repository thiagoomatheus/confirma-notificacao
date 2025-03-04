import { jest } from "@jest/globals";

// next-auth.ts

/* const mockedSession = {
  user: {
    name: 'Test User',
    email: 'test@example.com',
    image: 'https://example.com/image.jpg',
  },
  expires: '2024-12-31T23:59:59.000Z',
} */

const mockedSession = null

export const auth = jest.fn(async () => {
  console.log("Mocked next-auth/next called");
  return mockedSession
});

const NextAuth = () => ({
  auth: auth,
  signIn: jest.fn(),
  signOut: jest.fn(),
  handlers: {
    GET: jest.fn(),
    POST: jest.fn(),
    },
});

export default NextAuth;

jest.mock('next-auth/next', () => ({
  auth: auth,
}));