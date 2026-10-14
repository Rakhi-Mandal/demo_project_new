import { test, expect } from '@playwright/test';
import testData from '../test-data.json';

test("create new product item and logout @regression", async ({ page }) => {
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

  const signInWithEmailButtonAfterCredentials = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButtonAfterCredentials).toBeEnabled();
  await signInWithEmailButtonAfterCredentials.click();

  const itemsSidebarButton = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButton).toBeEnabled();
  await itemsSidebarButton.click();

  const productItemsLink = page.getByRole('link', { name: 'Product Items' });
  await expect(productItemsLink).toBeEnabled();
  await productItemsLink.click();

  const newProductItemLink = page.getByRole('link', { name: 'New Product Item' });
  await expect(newProductItemLink).toBeEnabled();
  await newProductItemLink.click();

  const selectCustomerButton = page.getByRole('button', { name: 'Select Customer' });
  await expect(selectCustomerButton).toBeEnabled();
  await selectCustomerButton.click();

  const customerRadioInput = page.locator("xpath=//input[@id='radio.input.1000']");
  await expect(customerRadioInput).toBeEnabled();
  await customerRadioInput.click();

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const productClassTextbox = page.getByRole('textbox', { name: 'Select a Product Class' });
  await expect(productClassTextbox).toBeEnabled();
  await productClassTextbox.click();

  const primeLabelOption = page.locator("xpath=//input[@name='deliverableItem.product_class_id']/following::li[@data-label='Prime Label']");
  await expect(primeLabelOption).toBeEnabled();
  await primeLabelOption.click();

  const customerPartNumberInput = page.locator("xpath=//input[@name='productItemExtension.customer_part_number']");
  await expect(customerPartNumberInput).toBeEditable();
  await customerPartNumberInput.fill(testData.productItemExtensionCustomerPartNumber);

  const brandNameInput = page.locator("xpath=//input[@name='productItemExtension.brand_name']");
  await expect(brandNameInput).toBeEditable();
  await brandNameInput.fill(testData.productItemExtensionBrandName);

  const maxRollDiameterInput = page.locator("xpath=//input[@name='specification.max_roll_diameter']");
  await expect(maxRollDiameterInput).toBeEditable();
  await maxRollDiameterInput.fill(testData.specificationMaxRollDiameter);

  const enterSubstrateInput = page.locator("xpath=//input[@placeholder='Enter substrate']");
  await expect(enterSubstrateInput).toBeEditable();
  await enterSubstrateInput.fill(testData.enterSubstrate);

  const enterCoatingTextbox = page.getByRole('textbox', { name: 'Enter Coating' });
  await expect(enterCoatingTextbox).toBeEnabled();
  await enterCoatingTextbox.click();

  const dtPrintableMatteOption = page.locator("xpath=//input[@name='specification.coating_type_valuelist_option_id']/following::li[@data-label='DT Printable Matte']");
  await expect(dtPrintableMatteOption).toBeEnabled();
  await dtPrintableMatteOption.click();

  const coreDiameterTextbox = page.getByRole('textbox', { name: 'Select a Core Diameter' });
  await expect(coreDiameterTextbox).toBeEnabled();
  await coreDiameterTextbox.click();

  const coreDiameterOption157 = page.locator("xpath=//input[@name='specification.core_diameter_id']/following::li[@data-value='157']");
  await expect(coreDiameterOption157).toBeEnabled();
  await coreDiameterOption157.click();

  const unwindTextbox = page.getByRole('textbox', { name: 'Select an Unwind' });
  await expect(unwindTextbox).toBeEnabled();
  await unwindTextbox.click();

  const sheeted3Option = page.locator("xpath=//input[@name='specification.wind_direction_id']/following::li[@data-label='Sheeted 3 - Sheeted material; not wound on a roll.']");
  await expect(sheeted3Option).toBeEnabled();
  await sheeted3Option.click();

  const enterLaminateTextbox = page.getByRole('textbox', { name: 'Enter Laminate' });
  await expect(enterLaminateTextbox).toBeEnabled();
  await enterLaminateTextbox.click();

  const clearPolyesterOption = page.locator("xpath=//input[@name='specification.laminate_type_valuelist_option_id']/following::li[@data-label='Clear Polyester']");
  await expect(clearPolyesterOption).toBeEnabled();
  await clearPolyesterOption.click();

  const salesUnitTextbox = page.getByRole('textbox', { name: 'Select a Sales Unit' });
  await expect(salesUnitTextbox).toBeEnabled();
  await salesUnitTextbox.click();

  const caseOption = page.locator("xpath=//input[@name='item.sales_unit_id']/following::li[@data-label='Case']");
  await expect(caseOption).toBeEnabled();
  await caseOption.click();

  const quantityInSalesUomInput = page.locator("xpath=//input[@name='item.quantity_in_sales_uom']");
  await expect(quantityInSalesUomInput).toBeEditable();
  await quantityInSalesUomInput.fill(testData.itemQuantityInSalesUom);

  const deliverableItemDescriptionTextarea = page.locator("xpath=//textarea[@id='deliverableItem.description']");
  await expect(deliverableItemDescriptionTextarea).toBeEditable();
  await deliverableItemDescriptionTextarea.fill(testData.deliverableItemDescription);

  const aibComplianceCheckbox = page.getByRole('checkbox', { name: 'AIB Compliance' });
  await expect(aibComplianceCheckbox).toBeEnabled();
  await aibComplianceCheckbox.click();

  const selectCategoryTextbox = page.getByRole('textbox', { name: 'Select a category' });
  await expect(selectCategoryTextbox).toBeEnabled();
  await selectCategoryTextbox.click();

  const rollToRollOption = page.locator("xpath=//input[@name='productItemExtension.product_item_category']/following::li[@data-label='Roll to Roll']");
  await expect(rollToRollOption).toBeEnabled();
  await rollToRollOption.click();

  const createButton = page.getByRole('button', { name: 'Create' });
  await expect(createButton).toBeEnabled();
  await createButton.click();

  const linksButton = page.getByRole('button', { name: 'Links' });
  await expect(linksButton).toBeEnabled();
  await linksButton.click();

  const userMenuButton = page.getByRole('button', { name: 'Ranga Sharan Rohith Fortis' });
  await expect(userMenuButton).toBeEnabled();
  await userMenuButton.click();

  const logoutLink = page.getByRole('link', { name: 'Logout' });
  await expect(logoutLink).toBeEnabled();
  await logoutLink.click();

});
