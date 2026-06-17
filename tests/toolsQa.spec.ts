import {test} from "@playwright/test";

test('Introduce data into form', { tag: ['@smoke123'] },async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name', ).fill('Test First Name');

    await page.getByPlaceholder('Last Name', ).fill('Test Last Name');

    await page.getByPlaceholder('name@example.com', ).fill('name@example.com');

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/input').click();

    await page.getByPlaceholder('Mobile Number', ).fill('0740123456');

    await page.locator('xpath = //*[@id="dateOfBirthInput"]').fill('18 Aug 1990');

    await page.waitForTimeout(1000);

    await page.locator('xpath = //*[@id="dateOfBirthInput"]').press('Enter')

    await page.waitForTimeout(1000);

    await page.locator('xpath = /html/body/div[1]/div/div/div/div[2]/div[1]/form/div[6]/div[2]/div/div/div[1]/div[2]/input').click();

    await page.waitForTimeout(1000);

    await page.locator('xpath = /html/body/div[1]/div/div/div/div[2]/div[1]/form/div[6]/div[2]/div/div/div[1]/div[2]/input').pressSequentially('Math');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');

    await page.locator('xpath = /html/body/div[1]/div/div/div/div[2]/div[1]/form/div[7]/div[2]/div[1]/input').click();

    await page.waitForTimeout(1000);

    await page.locator('xpath = /html/body/div[1]/div/div/div/div[2]/div[1]/form/div[8]/div[2]/input').setInputFiles('C:\\Users\\vzoicas\\Downloads\\click pom.PNG');

    await page.waitForTimeout(1000);

    await page.getByPlaceholder('Current Address', ).fill('test address');

    await page.locator('xpath =/html/body/div[1]/div/div/div/div[2]/div[1]/form/div[10]/div[2]/div/div/div[1]/div[1]').click({ force: true });

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[1]/div/div/div/div[2]/div[1]/form/div[10]/div[2]/div/div/div[1]/div[2]/input').pressSequentially('Rajasthan');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[1]/div/div/div/div[2]/div[1]/form/div[10]/div[3]/div/div/div[1]/div[1]').click({ force: true });

    await page.waitForTimeout(1000);

    await page.locator('xpath =/html/body/div[1]/div/div/div/div[2]/div[1]/form/div[10]/div[3]/div/div/div[1]/div[2]/input').fill('Jaipur');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    await page.getByText('Submit').click();

   // await page.locator('xpath = //button[contains(text(), "Submit")]').click()

    await page.waitForTimeout(1000);

});