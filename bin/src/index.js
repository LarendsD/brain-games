import readlineSync from 'readline-sync';
import findExpression from './games/brain-calc-logic.js';
import findEven from './games/brain-even-logic.js';
import findgcd from './games/brain-gcd-logic.js';
import findPrime from './games/brain-prime-logic.js';
import findProgression from './games/brain-progression-logic.js';

const commonLogic = (question) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  let i = 0;
  while (i < 3) {
    let correctAnswer = '';
    if (question === 'What is the result of the expression?') {
      correctAnswer = findExpression();
    } else if (question === 'Answer "yes" if the number is even, otherwise answer "no".') {
      correctAnswer = findEven();
    } else if (question === 'Find the greatest common divisor of given numbers.') {
      correctAnswer = findgcd();
    } else if (question === 'Answer "yes" if given number is prime. Otherwise answer "no".') {
      correctAnswer = findPrime();
    } else {
      correctAnswer = findProgression();
    }
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
export default commonLogic;
