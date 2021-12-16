import readlineSync from 'readline-sync';

const commonLogic = (rule, logicOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  let i = 0;
  while (i < 3) {
    const logic = logicOfGame().split(';');
    const correctAnswer = logic[1];
    console.log(`Question: ${logic[0]}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  if (i === 3) {
    return `Congratulations, ${name}!`;
  }
  return `Let's try again, ${name}!`;
};
const randomNumber = (min, max) => {
  // Generation of a random number, including the maximum in the range
  const result = Math.floor(Math.random() * ((max + 1) - min) + min);
  return result;
};

export { commonLogic };
export { randomNumber };
