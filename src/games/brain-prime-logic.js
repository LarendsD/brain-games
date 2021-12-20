import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let del = 2; del <= num / 2; del += 1) {
    if (num % del === 0) {
      return false;
    }
  }
  return true;
};

const findPrime = () => {
  const question = randomNumber(0, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => commonLogic(rule, findPrime);
