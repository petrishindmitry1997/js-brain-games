import getRandomNumber from 'game-even.js';
import playGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  };
  
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, answer];
};

const playGamePrime = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGamePrime;