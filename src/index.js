import readlineSync from 'readline-sync';

const commonLogic = (rule, logicOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const logic = logicOfGame();
    const correctAnswer = logic[1];
    console.log(`Question: ${logic[0]}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
      if (i === 2) {
        return `Congratulations, ${name}!`;
      }
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  return `Let's try again, ${name}!`;
};

export default commonLogic;
