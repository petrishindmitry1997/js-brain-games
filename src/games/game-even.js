import playGame from '../index.js';

const maxNum = 100;
const minNum = 0;

export const getRandomNumber = (minNum,
  maxNum) => Math.floor(Math.random() * maxNum) + minNum;



const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEvenNumber = (num) => {
    num % 2 === 0;
};
export const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const playGameEven = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGameEven;