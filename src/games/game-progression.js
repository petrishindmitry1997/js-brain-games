import getRandomNumber from '../getRN.js';
import playGame from '../index.js';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

export const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber();
    const progressionDiff = getRandomNumber(1, 10);
    const hiddenNum = getRandomNumber(0, progressionLength);
    const progression = [];

    for (let i = 0; i < progressionLength; i++) {
      progression.push(firstNum + progressionDiff * i);
    };

    const answer = progression[hiddenNum];
    progression[hiddenNum] = '..';
    const question = progression.join(' ');
    
    return [question, String(answer)];
  };
  
  const playGameProgression = () => {
    playGame(task, getQuestionAndAnswer);
  };
  
  export default playGameProgression;