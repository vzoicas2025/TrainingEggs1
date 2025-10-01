import {test} from "@playwright/test";

test('Introduce data into form', { tag: ['@smoke1'] },async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name', ).fill('Test First Name');

    await page.getByPlaceholder('Last Name', ).fill('Test Last Name');

    await page.getByPlaceholder('name@example.com', ).fill('name@example.com');

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[3]/div[2]/div[1]/label').click();

    await page.getByPlaceholder('Mobile Number', ).fill('0740123456');

    await page.locator('xpath = //*[@id="dateOfBirthInput"]').fill('18 Aug 1990');

    await page.waitForTimeout(1000);

    await page.locator('xpath = //*[@id="dateOfBirthInput"]').press('Enter')

    await page.waitForTimeout(1000);

    await page.locator('xpath = /html/body/div[2]/div/div/div/div[2]/div[2]/form/div[6]/div[2]/div/div/div[1]').click();

    await page.waitForTimeout(1000);

    await page.locator('xpath = /html/body/div[2]/div/div/div/div[2]/div[2]/form/div[6]/div[2]/div/div/div[1]/div[2]/div/input').pressSequentially('Math');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');

    await page.locator('xpath = /html/body/div[2]/div/div/div/div[2]/div[2]/form/div[7]/div[2]/div[1]/label').click();

    await page.waitForTimeout(1000);

    await page.locator('xpath = /html/body/div[2]/div/div/div/div[2]/div[2]/form/div[8]/div[2]/div/input').setInputFiles('C:\\Users\\vzoicas\\Downloads\\6519.PNG');

    await page.waitForTimeout(1000);

    await page.getByPlaceholder('Current Address', ).fill('test address');

    await page.locator('xpath =/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[10]/div[2]/div/div/div[1]/div[1]').click();

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[10]/div[2]/div/div/div[1]/div[2]/div/input').pressSequentially('Rajasthan');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[10]/div[3]/div/div/div[1]/div[1]').click();

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[10]/div[3]/div/div/div[1]/div[2]/div/input').fill('Jaipur');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    await page.getByText('Submit').click();

    await page.waitForTimeout(1000);

});