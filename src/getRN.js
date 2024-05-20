const maxNum = 100;
const minNum = 1;

const getRandomNumber = (min = minNum, max = maxNum) => {
    return Math.floor(Math.random() * max) + min;
}; 

export default getRandomNumber;