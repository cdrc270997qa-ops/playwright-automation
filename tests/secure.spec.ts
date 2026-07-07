import { test, expect } from '@playwright/test';

test.describe('Secure Area Tests', () => {
    test('user can access secure area', async ({ page }) => {
        await page.goto('/secure');

        await expect(page.locator('text=You logged into a secure area!')).toBeVisible();
    });
});