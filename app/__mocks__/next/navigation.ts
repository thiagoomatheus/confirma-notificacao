// __mocks__/next/navigation.ts
import { jest } from '@jest/globals';

const mockRedirect = jest.fn(() => {
  console.log("Mocked redirect called");
});

const mockNextNavigation = {
  redirect: mockRedirect,
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    query: {},
    pathname: '/',
    route: '/'
  })
};

export const redirect = mockRedirect;
export const useRouter = mockNextNavigation.useRouter;

jest.mock('next/navigation', () => mockNextNavigation);