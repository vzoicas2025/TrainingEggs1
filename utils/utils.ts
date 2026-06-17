import { expect, Page } from '@playwright/test';

export const scrollNumberOfTimes = async (page: Page, nr: number) => {
    for(let i=0; i < nr; i++){
        await page.evaluate(() => window.scrollBy(0, 1000));
        await page.waitForTimeout(500);
    }
}

export const checkUserArrivesOnPageURL = async (page: Page, containtext: string) => {
    await page.waitForTimeout(1000);
    const url = page.url()
    expect(url).toContain(containtext);

}