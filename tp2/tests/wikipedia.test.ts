
import {test, expect} from '@playwright/test';


test("Google", async ({page}) => {
    await page.goto('https://fr.wikipedia.org');
    await expect(page).toHaveTitle(/Wikipédia/);
    const locator = page.locator('#p-search input.cdx-text-input__input').first();
    await locator.fill('Rick Roll');
    await page.getByRole('link', { name: 'Rickroll mème internet' })
    let link = page.getByRole('link', { name: 'Rickroll mème internet' })
    link.click()
    await expect(page).toHaveTitle(/Rickroll/);
    const link2 = await page.getByRole('link', { name: 'Never Gonna Give You Up', exact: true })
    await page.pause(); 
    await expect(link2).toBeInViewport();

    

});






