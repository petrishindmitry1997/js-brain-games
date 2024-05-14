import getRandomNumber from 'game-even.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

export const getCorrectAnswer = (num1, num2, operation) => {
  let answer = 0;
  if (operation === '+') {
    answer = num1 + num2;
  } else if (operation === '-') {
    answer = num1 - num2;
  } else if (operation === '*') {
    answer = num1 * num2;
  };
  return answer;
};

export const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operation = operations[getRandomNumber(0, 2)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = getCorrectAnswer(num1, num2, operation);
  return [question, String(answer)];
};

const playGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGameCalc;