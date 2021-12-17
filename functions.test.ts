const { shuffleArray } = require('./utils');
const { bots } = require('./data.js');

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
