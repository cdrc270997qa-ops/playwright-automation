import { test,expect } from '../fixtures/test.fixture';

test.describe('Login Tests', () => {
    test('Invalid login Test Failed', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('practice', 'WrongPassword');
        await expect(loginPage.alertMessage).toContainText('Message Error: Test Failed');
    });
});