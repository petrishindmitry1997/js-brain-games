import playGame from '../index.js';

export const getRandomNumber = (minNum,maxNum) => {
    const maxNum = 100;
    const minNum = 0;
    
    return Math.floor(Math.random() * maxNum) + minNum;
}; 

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEvenNumber = (num) => {
    num % 2 === 0;
};

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, answer];
};

const playGameEven = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGameEven;