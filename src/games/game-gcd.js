import getRandomNumber from 'brain-even.js';
import playGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  };

  return gcd;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  
  return [question, answer];
};

const playGameGcd = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGameGcd;