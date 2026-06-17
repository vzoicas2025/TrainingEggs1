import { test, expect } from '@playwright/test';

test('Add an item to cart', { tag: ['@smoke12', '@regression'] },async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');

    await page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input').click();

    await page.waitForTimeout(1000);

    await expect(page.locator('.app_logo', { hasText: 'Swag Labs' })).toBeVisible();

    await page.waitForTimeout(1000);

    // Add products that are $15 or more using a repetitive loop
    const products = page.locator('.inventory_item');
    const productCount = await products.count();
    let expectedItemsInCart = 0;

    for (let i = 0; i < productCount; i++) {
        const product = products.nth(i);
        const priceText = await product.locator('.inventory_item_price').textContent();
        const price = parseFloat(priceText?.replace('$', '') || '0');

        if (price >= 15) {
            await product.locator('button:has-text("Add to cart")').click();
            expectedItemsInCart++;
            await page.waitForTimeout(300);
        }
    }

    await page.waitForTimeout(1000);

    await expect(page.locator('.shopping_cart_badge')).toHaveText(String(expectedItemsInCart));

    await page.locator('//*[@id="shopping_cart_container"]/a').click();

    await page.waitForTimeout(1000);

    await page.locator('//*[@id="checkout"]').click();

    await page.waitForTimeout(1000);

    await page.getByPlaceholder('First Name').fill('standard_user');

    await page.getByPlaceholder('Last Name').fill('standard_user');

    await page.getByPlaceholder('Zip/Postal Code').fill('standard_user');

    await page.waitForTimeout(1000);


    await page.locator('//*[@id="continue"]').click();

    await page.waitForTimeout(1000);

    await page.locator('//*[@id="finish"]').click();

    await page.waitForTimeout(5000);

});