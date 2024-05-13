import { welcomeRun } from '..';

export const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};
export const isEven = (number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    };
};

const phrase = 'Answer "yes" if number even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNumber(10000);
  let answer;
  if (isEven(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

export default () => welcomeRun(phrase, getQuestionAnswer);