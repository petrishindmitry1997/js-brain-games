const maxNum = 100;
const minNum = 0;

const getRandomNumber = (min = minNum, max = maxNum) => {
    return Math.floor(Math.random() * max) + min;
}; 

export default getRandomNumber;