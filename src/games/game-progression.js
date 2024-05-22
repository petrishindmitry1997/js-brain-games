import getRandomNumber from '../getRN.js';
import playGame from '../index.js';

const task = 'What number is missing in the progression?';

const generateProgression = (firstNum, progressionDiff, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + progressionDiff * i);
  }

  return progression;
};

export const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const firstNum = getRandomNumber(1, 100);
  const progressionDiff = getRandomNumber(1, 10);
  const hiddenNum = getRandomNumber(0, progressionLength);
  const progression = generateProgression(firstNum, progressionDiff, progressionLength);

  const answer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const question = progression.join(' ');

  return [question, String(answer)];
};

const playGameProgression = () => {
  playGame(task, getQuestionAndAnswer);
};

export default playGameProgression;
