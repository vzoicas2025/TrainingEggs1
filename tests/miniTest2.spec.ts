import {expect, test} from "@playwright/test";

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.mini.de/de_DE/home.html');

    await page.waitForTimeout(1000);

    await page.evaluate('document.querySelector("body > epaas-consent-drawer-shell").shadowRoot.querySelector("body > div > div > section > div.actions > div > div.buttons > button.accept-button.button-primary > span").click()');

    await expect(page.locator('.consentDrawer.fadein.small')).not.toBeTruthy;

    await page.waitForTimeout(1000);

});

test('Open Mini Cooper Cabrio page', { tag: ['@withHooks123','@withHooks13'] }, async ({  }) => {
    await page.locator('xpath = /html/body/main/div/div/div[2]/div/div[5]/section/div[2]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    while (!await page.locator('xpath = /html/body/main/div/div/div[2]/div/div[5]/section/div[2]/div/div/div/div[6]/a/div/div[1]/p').isVisible().catch(() => false)) {
        await page.locator('xpath = /html/body/main/div/div/div[2]/div/div[5]/section/div[2]/div/button[2]').click();
        await page.waitForTimeout(500);
    }
    await page.locator('xpath = /html/body/main/div/div/div[2]/div/div[5]/section/div[2]/div/div/div/div[6]/a/div/div[1]/p').scrollIntoViewIfNeeded();
    await page.locator('xpath = /html/body/main/div/div/div[2]/div/div[5]/section/div[2]/div/div/div/div[6]/a/div/div[1]/p').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('body > div.header > header > div.md-fsm-navigation__stream.md-fsm-navigation__stream--active.md-stream-navigation-bottom')).toBeVisible();
});
