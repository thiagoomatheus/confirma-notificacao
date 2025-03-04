import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'next-auth/providers/google':
      '<rootDir>/app/__mocks__/next-auth-google.ts',
    'next-auth': '<rootDir>/app/__mocks__/next-auth.ts',
    'next-auth/react': '<rootDir>/app/__mocks__/next-auth/react.js',
    'next-auth/next': '<rootDir>/app/__mocks__/next-auth.ts',
  }
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)