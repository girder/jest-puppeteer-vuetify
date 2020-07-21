export async function testComponent(component) {
  await page.goto(`http://localhost:8080/#/${component}`)
}