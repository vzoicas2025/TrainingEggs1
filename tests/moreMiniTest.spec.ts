import {expect, test} from "@playwright/test";
import {checkUserArrivesOnPageURL} from "../utils/utils";
import {clickLevel1HeaderItems, clickLevel3HeaderItems} from "../utils/navigation";

test('mini',{ tag: ['@mini'] }, async ({ page }) => {
    await page.goto('https://www.mini.de/de_DE/home.html');

    const quickEntryButtonText = page.locator(".md-home-quick-entry .btn-title") //list of cars quick entry text
    const count = await quickEntryButtonText.count()

    for(let i=0;i < count; i++){
        const quickEntryElement = quickEntryButtonText.nth(i);
        await quickEntryElement.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        const currentText = await quickEntryElement.innerText();

        if(currentText.includes('MINI Neuwagen und Junge Gebrauchte')){
            await quickEntryElement.click();
            return;
        }
    }

    await page.waitForTimeout(1000);

});

test('mini1',{ tag: ['@mini1'] }, async ({ page }) => {
    await page.goto('https://www.mini.de/de_DE/home.html');

    await page.locator("xpath = /html/body/header/nav/div[2]/div/div/ul/li[1]/div/button").click() //modelle button
    await page.waitForTimeout(2000);
    let buttonList = await page.locator('.md-button.md-next.btn-inline-container.btn-flex-container--align-left')
    const count = await buttonList.count()

    for(let i=0;i < count; i++){
        const buttonElement = buttonList.nth(i);
        const currentText = await buttonElement.innerText();

        if(currentText.includes('Konfigurieren') ){
            await page.waitForTimeout(1000);
            await buttonElement.click();
            break;
        }
    }
});

test('mini2',{ tag: ['@mini2'] }, async ({ page }) => {
    await page.goto('https://www.mini.de/de_DE/home.html');
    await page.waitForTimeout(1000);
    await clickLevel1HeaderItems(page, 'Angebote')
    await clickLevel3HeaderItems(page, 'MINI Neuwagen')
    await checkUserArrivesOnPageURL(page, 'fahrzeugsuche')
});

test('accept cookies',{ tag: ['@mini3'] }, async ({ page }) => {
    await page.goto('https://www.mini.de/de_DE/home.html');
    await page.waitForTimeout(1000);
    await page.evaluate('document.querySelector("body > epaas-consent-drawer-shell").shadowRoot.querySelector("body > div > div > section > div.actions > div > div.buttons > button.accept-button.button-primary > span").click()')
    await expect(page.locator('.consentDrawer.fadein.small')).not.toBeTruthy

});