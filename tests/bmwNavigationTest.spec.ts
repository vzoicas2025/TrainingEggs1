import { test} from "@playwright/test";
import {clickLevel1HeaderItems, clickLevel3HeaderItems} from "../utils/navigation";


test('bmw navigation',{ tag: ['@bmw1'] }, async ({ page }) => {
    await page.goto('https://www.bmw.de/de/index.html');
    await clickLevel1HeaderItems(page,'Elektrofahrzeuge');
    await page.waitForTimeout(1000);
    await clickLevel3HeaderItems(page, 'Ladeerfahrungen');
    await page.waitForTimeout(1000);

});