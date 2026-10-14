import { test, expect } from '@playwright/test';
import testData from '../test-data.json';

test("user signs in and navigates Items sidebar @regression", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const signInWithEmailButton = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButton).toBeEnabled();
  await signInWithEmailButton.click();

  const emailInput = page.locator("xpath=//input[@name='email']");
  await expect(emailInput).toBeEditable();
  await emailInput.fill(testData.email);

  const passwordInput = page.locator("xpath=//input[@name='password']");
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const signInWithEmailButtonAfterFill = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButtonAfterFill).toBeEnabled();
  await signInWithEmailButtonAfterFill.click();

  const itemsSidebarButton = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButton).toBeEnabled();
  await itemsSidebarButton.click();

  const itemsSidebarButtonAfterFirstClick = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButtonAfterFirstClick).toBeEnabled();
  await itemsSidebarButtonAfterFirstClick.click();

  const sidebarDesktopSection = page.locator("xpath=//nav[@data-cy='sidebarDesktop']/div[1]/div[1]/div[4]/div[1]");
  await expect(sidebarDesktopSection).toBeEnabled();
  await sidebarDesktopSection.click();

  const itemsSidebarButtonAfterSidebarSection = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButtonAfterSidebarSection).toBeEnabled();
  await itemsSidebarButtonAfterSidebarSection.click();

  const itemsSidebarButtonAfterThirdClick = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButtonAfterThirdClick).toBeEnabled();
  await itemsSidebarButtonAfterThirdClick.click();

  const itemsSidebarButtonAfterFourthClick = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButtonAfterFourthClick).toBeEnabled();
  await itemsSidebarButtonAfterFourthClick.click();

});
