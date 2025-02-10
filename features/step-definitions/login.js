import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open();
});

When(/^User clicks the "Login" button$/, async () => {
    await loginPage.clickLoginButton();
});

Then(/^User should see "(.*)" error message$/, async (expectedMessage) => {
    await expect(loginPage.errorMessage).toBeExisting();
    await expect(loginPage.errorMessage).toHaveText(expect.stringContaining(expectedMessage));
});
