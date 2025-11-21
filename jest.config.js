/** @type {import('jest').Config} */
const config = {
  // verbose: true,
  projects: [
    {
      rootDir: './backend',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/**/*.test.ts'],
    },
    {
      rootDir: './frontend',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/**/*.test.ts'],
      moduleNameMapper: {
        // couldn't make a catch-all analog from tsconfig
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
        '^features/(.*)$': '<rootDir>/src/features/$1',
        '^entities/(.*)$': '<rootDir>/src/entities/$1',
        '^shared/(.*)$': '<rootDir>/src/shared/$1',
      },
    },
  ],
};

export default config;
