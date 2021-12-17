const { shuffleArray } = require('./utils');
const { bots } = require('./data.js');

describe('shuffleArray should', () => {
    // CODE HERE
    test(' return an array', async () => {
	    expect(Array.isArray(shuffleArray(bots))).toBe(true);
    })
    test(' returns entire array', async () => {
        let shuffled = shuffleArray(bots);
        expect(shuffled.length).toBe(10);
    })
    test(' not be the same as original', async () => {
        let shuffled = shuffleArray(bots);
        expect(shuffleArray(bots)).not.toEqual(bots);
    })
    test(' have correct properties', async () => {
        let shuffled = shuffleArray(bots);
        for (let i = 0; i < shuffled.length; i++) {
            expect(shuffled[i]).toHaveProperty('name');
            expect(shuffled[i]).toHaveProperty('imgAddress');
            expect(shuffled[i]).toHaveProperty('health');
            expect(shuffled[i]).toHaveProperty('attacks');
        }
    })
    test(' have same items as original', async () => {
	    expect(shuffleArray(bots)).toEqual(expect.arrayContaining(bots));
    })
})
