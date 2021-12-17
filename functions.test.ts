const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { arrayReturned, arrayLength } = require('./functions.js');
const { shuffleArray } = require('./utils');
const { bots } = require('./data.js');

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('shuffleArray should', () => {
    // CODE HERE
    test('Shuffled array returns entire array', async () => {
        let shuffled = shuffleArray(bots);
        expect(shuffled.length).toBe(10);
    })
    test('Shuffled array is not the same as original', async () => {
        let shuffled = shuffleArray(bots);
        expect(shuffled).not.toEqual(bots);
    })
    test('Shuffled array has correct properties', async () => {
        let shuffled = shuffleArray(bots);
        for (let i = 0; i < shuffled.length; i++) {
            expect(shuffled[i]).toHaveProperty('name');
            expect(shuffled[i]).toHaveProperty('imgAddress');
            expect(shuffled[i]).toHaveProperty('health');
            expect(shuffled[i]).toHaveProperty('attacks');
        }
    })
})
