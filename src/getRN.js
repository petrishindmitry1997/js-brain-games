const getRandomNumber = (minNum,maxNum) => {
    const maxNum = 100;
    const minNum = 0;
    
    return Math.floor(Math.random() * maxNum) + minNum;
}; 

export default getRandomNumber;