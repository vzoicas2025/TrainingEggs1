import { Page } from '@playwright/test';

export const clickLevel1HeaderItems = async (page: Page, headerItem: string) => {
    await page.waitForTimeout(1000);
    const headerList = page.locator(".md-fsm-header__start .md-fsm-link.md-fsm-navigation__level1-item-link");
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
    const headerList = page.locator(".md-fsm-header__flyout.md-fsm-header__flyout--expanded .md-fsm-navigation__level3-item");
    const nrItems = await headerList.count();
    for(let i = 0; i <= nrItems; i++){
        if(await headerList.nth(i).getByText(headerItem).isVisible()){
            await headerList.nth(i).click()
            await page.waitForTimeout(1000);
            return
        }
    }
}