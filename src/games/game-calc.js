import getRandomNumber from '../getRN.js';
import playGame from '../index.js';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

export const getOperation = (num1, num2, operation) => {
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
  const answer = getOperation(num1, num2, operation);
  
  return [question, answer];
};

const playGameCalc = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGameCalc;