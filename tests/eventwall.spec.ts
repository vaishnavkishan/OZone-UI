import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('validate ozone event wall loaded', async ({ page }) => {
  
  const newTodo = page.getByText('The OZone Event Wall');
});

test('validate create event page is working when all details are provided', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Upcoming' }).click();
  await page.getByRole('link', { name: 'Past' }).click();
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('auto test');
  await page.locator('div').filter({ hasText: /^Date$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Date$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Date$/ }).getByRole('textbox').fill('2023-12-10T10:00');
  await page.locator('div').filter({ hasText: /^Deadline$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Deadline$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Deadline$/ }).getByRole('textbox').fill('2023-10-10T00:23');
  //await page.locator('div').filter({ hasText: /^TypeOnlineOffline$/ }).locator('#cars').selectOption('1');
 // await page.locator('div').filter({ hasText: /^ModeOnlineOffline$/ }).locator('#cars').selectOption('1');
  await page.locator('div').filter({ hasText: /^Mode Details$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Mode Details$/ }).getByRole('textbox').fill('auto mode');
  await page.locator('div').filter({ hasText: /^Topic$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Topic$/ }).getByRole('textbox').fill('auto topic');
  await page.locator('div').filter({ hasText: /^Community$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Community$/ }).getByRole('textbox').fill('autocommu@auto.com');
  await page.locator('div').filter({ hasText: /^Speaker$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Speaker$/ }).getByRole('textbox').fill('autotet@auto.com');
  await page.locator('div').filter({ hasText: /^Person Of Contact$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Person Of Contact$/ }).getByRole('textbox').fill('autopero@auto.com');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('123');
  await page.locator('div').filter({ hasText: /^Tags$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Tags$/ }).getByRole('textbox').fill('test, auto');
  await page.locator('div').filter({ hasText: /^Event Details$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Event Details$/ }).getByRole('textbox').fill('this event is genrrated by automation');
  await page.locator('div').filter({ hasText: /^Rules$/ }).getByRole('textbox').fill('au');
  await page.getByText('au', { exact: true }).fill('automation');
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Event created successfully!')).toBeVisible();
  await page.getByText('Event created successfully!').click();
  await page.getByLabel('Close').click();
});


test('validate create event page is not working when all details are not provided', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Event created successfully!')).not.toBeVisible();
});

test('validate that past evnts page is displayed with events', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.getByRole('link', { name: 'Past' }).click();
  await expect(page.getByRole('heading', { name: 'All past events' })).toBeVisible();
  
  await expect(page.getByLabel('Search')).toBeVisible();
  //await page.getByText('2023160906:35First EventSpeaker: ozoneDetails: This is a demo topic, any...Capac').click();
  await expect(page.locator('.MuiButton-root').first()).toBeVisible();
  await expect(page.locator('button:nth-child(3)').first()).toBeVisible();
  await expect(page.locator('div:nth-child(4) > .MuiCard-root > .MuiCardContent-root > .MuiSheet-root > button:nth-child(3)')).toBeVisible();
});

test('validate that upcoming page is displayed with events', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.getByRole('link', { name: 'Upcoming' }).click();
  await expect(page.getByRole('heading', { name: 'All upcoming events' })).toBeVisible();
  
  expect(page.getByLabel('Search')).toBeVisible();
  //await page.getByText('2023160906:35First EventSpeaker: ozoneDetails: This is a demo topic, any...Capac').click();
  await expect(page.locator('.MuiButton-root').first()).toBeVisible();
  expect(page.locator('button:nth-child(3)').first()).toBeVisible();
  await expect(page.locator('div:nth-child(4) > .MuiCard-root > .MuiCardContent-root > .MuiSheet-root > button:nth-child(3)')).toBeVisible();
});

test('validate that Register page is loading for an upcoming event by clicking on register button', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.getByRole('link', { name: 'Upcoming' }).click();
  await expect(page.getByRole('heading', { name: 'All upcoming events' })).toBeVisible();
  
  await (page.locator('button:nth-child(3)').first()).click();
});

test('validate that Details page is loading for an event', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.getByRole('link', { name: 'Past' }).click();
  expect(page.getByRole('heading', { name: 'All past events' })).toBeVisible();
  
  await page.locator('.MuiButton-root').first().click();
});

test('validate that registration page is loading via details page for an umpcoming event', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.getByRole('link', { name: 'Past' }).click();
  await page.getByRole('link', { name: 'Upcoming' }).click();
  await expect(page.getByRole('heading', { name: 'All upcoming events' })).toBeVisible();

  await page.getByRole('button', { name: 'Details' }).first().click();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Register for the event' })).toBeVisible();
  
});

test('validate that new user is able to register via details page for an umpcoming event', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Create Event' }).click();
  await page.getByRole('link', { name: 'Past' }).click();
  await page.getByRole('link', { name: 'Upcoming' }).click();
  await expect(page.getByRole('heading', { name: 'All upcoming events' })).toBeVisible();

  await page.getByRole('button', { name: 'Details' }).first().click();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Register for the event' })).toBeVisible();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('auto test');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('asdf@auto.com');
  await page.getByRole('button', { name: 'Sumit Request' }).click();
});