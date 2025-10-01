import {test} from "@playwright/test";

test('mini',{ tag: ['@mini'] }, async ({ page }) => {
    await page.goto('https://www.mini.de/de_DE/home.html');

    await page.locator('xpath = /html/body/header/nav/div[2]/div/div/ul/li[1]/div/button/span[1]').click();

    let quickEntryButtonText = page.locator(".md-home-quick-entry .btn-title") //list of cars quick entry text
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