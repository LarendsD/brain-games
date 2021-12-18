import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const IsNumberSimple = (num) => {
  for (let del = 2; del <= num / 2; del += 1) {
    if (num % del === 0) {
      return false;
    }
  }
  return true;
};
const findPrime = () => {
  let correctAnswer = '';
  const question = randomNumber(0, 99);
  if (IsNumberSimple(question) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
export default () => commonLogic('Answer "yes" if given number is prime. Otherwise answer "no".', findPrime);
