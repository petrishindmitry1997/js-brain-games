import getRandomNumber from 'game-even.js';
import playGame from '../index.js';

const lengthProgression = 10;

const rule = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber();
    const diffProgression = getRandomNumber(1, 10);
    const hiddenNum = getRandomNumber(0, lengthProgression);
    const progression = [];
    for (let i = 0; i < lengthProgression; i++) {
      progression.push(firstNum + diffProgression * i);
    }
    const question = progression.join(' ');
    const answer = progression[hiddenNum];
    progression[hiddenNum] = '..';
    
    return [question, answer];
  };
  
  const playGameProgression = () => {
    playGame(rule, getQuestionAndAnswer);
  };
  
  export default playGameProgression;