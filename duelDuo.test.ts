
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.css('#title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    //await driver.sleep(5000)
})

test('See All Bots button displays choices', async () => {
    const seeAllBots = await driver.findElement(By.css('#see-all'));
    await seeAllBots.click();
    const botCards = await driver.findElements(By.className('bot-card outline'));
    expect(botCards).toHaveLength(10);
})

test('Draw button returns five cards', async () => {
    driver.navigate().refresh();
    const drawButton = await driver.findElement(By.css('#draw'));
    await drawButton.click();
    const fiveDraws = await driver.findElements(By.className('bot-card outline'));
    expect(fiveDraws).toHaveLength(5);
})