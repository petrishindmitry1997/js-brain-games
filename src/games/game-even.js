import playGame from '../index.js';
import getRandomNumber from '../getRN.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEvenNumber = (num) => num % 2 === 0;

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, String(answer)];
};

const playGameEven = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGameEven;