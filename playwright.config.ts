import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['line'],
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  timeout: 30 * 1000,
  globalTimeout: 5 * 60 * 1000,

  use: {

    baseURL: process.env.BASE_URL,
    headless: true,

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 10 * 1000,
    navigationTimeout: 20 * 1000,
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'tests',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
       },
      dependencies: ['setup'],
    }

  ],
});
