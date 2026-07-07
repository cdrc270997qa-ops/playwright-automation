import { expect, test as setup } from '@playwright/test';

setup('authenticate user', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('text=You logged into a secure area!')).toBeVisible();

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});