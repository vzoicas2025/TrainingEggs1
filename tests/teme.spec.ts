import { test, expect } from '@playwright/test';

test('Mini i',{ tag: ['@mini31'] }, async ({ page }) => {
    await page.goto('https://www.mini.de/de_DE/home.html');
    await page.waitForTimeout(1000);
    await page.evaluate('document.querySelector("body > epaas-consent-drawer-shell").shadowRoot.querySelector("body > div > div > section > div.actions > div > div.buttons > button.accept-button.button-primary > span").click()')
    await expect(page.locator('.consentDrawer.fadein.small')).not.toBeTruthy


    await page.waitForTimeout(1000);
    await page.locator('xpath=/html/body/main/div/div/div[2]/div/div[1]/section/div/div/section/div[1]/div[2]/div[1]/div[1]/div/a').click();

    await expect(page.locator('xpath=/html/body/div[2]/div/div[2]/div')).toBeVisible();

    await page.waitForTimeout(1000);

    await page.locator('.md-custom-overlay-close').click();

    await page.waitForTimeout(2000);

    await page.locator('.asset-ratio-box-j_1748665250649').click();

    await page.waitForTimeout(2000);

    await page.goBack();


    await page.waitForTimeout(3000);

    await page.getByText('Die MINI 1965 Victory Edition - Eine Motorsportlegende für die Gegenwart').click();

    await page.waitForTimeout(3000);

    await page.goBack();



    await page.waitForTimeout(3000);

    await page.locator('.md-ht-btn.md-icn-map-pin-dot').click();

    await page.waitForTimeout(1000);



    await page.locator('xpath =/html/body/main/div[2]/div/div/div/div/div/div[2]/div[1]/div[1]/div[1]/input').fill('München, Bayern, Deutschland ');

    await page.waitForTimeout(2000);

    await page.locator('#downshift-\\:r0\\:-menu').waitFor();

    await page.locator('#downshift-\\:r0\\:-menu [role="option"]').nth(0).click();



    await page.waitForTimeout(1000);

    await page.locator('ul.sc-jytpVa.fjjxAo li #label_04107_1').click();

    await page.waitForTimeout(1000);
});
