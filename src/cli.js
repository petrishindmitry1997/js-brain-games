import readlineSync from 'readline-sync'; 

  
export const welcomeRun = () => {
    console.log('Welcome to the Brain Games!');
    const askUserName = () => {
        const userName = readlineSync.question('May I have your name? ');
        return userName;
      };
    const user = askUserName();
    console.log(`Hello, ${user}!\n`);
};  
  
  