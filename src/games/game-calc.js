import getRandomNumber from '../getRN.js';
import playGame from '../index.js';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

export const getOperation = (num1, num2, operation) => {
  const expressions = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
  };
  return expressions[operation];
};

export const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = getOperation(num1, num2, operation);

  return [question, String(answer)];
};

const playGameCalc = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGameCalc;
