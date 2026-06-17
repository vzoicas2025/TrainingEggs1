import { Page } from '@playwright/test';

export const clickLevel1HeaderItems = async (page: Page, headerItem: string) => {
    await page.waitForTimeout(1000);
    const headerList = page.locator(".cmp-globalnavigation__item");
    const nrItems = await headerList.count();
    for(let i = 0; i <= nrItems; i++){
        if(await headerList.nth(i).getByText(headerItem).isVisible()){
            await headerList.nth(i).click()
            await page.waitForTimeout(1000);
            return
        }
    }
}

export const clickLevel3HeaderItems = async (page: Page, headerItem: string) => {
    const headerList = page.locator(".cmp-globalnavigation__flyout-wrapper.position-relative.cmp-globalnavigation__flyout-wrapper--visible .cmp-list__item-title");
    const nrItems = await headerList.count();
    for(let i = 0; i <= nrItems; i++){
        if(await headerList.nth(i).getByText(headerItem).isVisible()){
            await headerList.nth(i).click()
            await page.waitForTimeout(1000);
            return
        }
    }
}