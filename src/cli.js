import readlineSync from "readline-sync"; 
import * as even from "./even.js";


  
export const welcomeRun = () => {
    console.log('Welcome to the Brain Games!');
    const askUserName = () => {
        const userName = readlineSync.question('May I have your name? ');
        return userName;
      };
    const user = askUserName();
    console.log(`Hello, ${user}!\n`);
};  

export const getUserAnswer = (question) => {
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    return answer;
  };
  
export const ask = (attempt = 1) => {
    if (attempt > 3) {
      console.log(`Congratulations, ${user}!`);
      return null;
    }

    const qa = even.getQuestionAnswer();
    const question = qa[0];
    const correctAnswer = qa[1];
    const userAnswer = getUserAnswer(question);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${user}!`);
      return null;
    }
    console.log('Correct!');
    return ask(attempt + 1);
  };

  ask();