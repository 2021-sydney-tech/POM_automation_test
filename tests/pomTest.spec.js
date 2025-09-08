const {test, expect} = require('@playwright/test');
import {LoginPage} from '../pages/LoginPage.js';
import {HomePage} from '../pages/HomePage.js';
import {CartPage} from '../pages/CartPage.js';


test('Test', async ({page}) => {

    //Login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    // Home Page
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Samsung galaxy s6');
    await page.waitForTimeout(3000);
    await homePage.gotoCart();
    await page.waitForTimeout(3000);

    // Cart Page
    const cart = new CartPage(page);
    const status = await cart.checkProductInCrt('Samsung galaxy s6');
    expect(status).toBeTruthy();

})
