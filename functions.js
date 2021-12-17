
const { shuffleArray } = require('./utils');
const { bots } = require('./data.js');

const arrayReturned = async () => {
    expect(shuffleArray(bots).length).toBe(5);
}

const arrayLength = async () => {
    let length = driver.shuffleArray(array).length;
    expect(length).toBe(array.length);
}

module.exports = {
    arrayReturned,
    arrayLength
}