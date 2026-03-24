 // @ts-check
import { test, expect } from '@playwright/test';

test('to check the title of the page', async ({ page }) => {
    //arrangement
    await page.goto('https://playwright.dev/')
    //assertion
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')


})
