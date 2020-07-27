/* eslint-disable import/prefer-default-export */
export async function testComponent(component) {
  await page.goto(`http://localhost:7922/#/${component}`);
}
