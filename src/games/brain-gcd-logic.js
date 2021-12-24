import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const findGcd = () => {
  const randomValue1 = randomNumber(0, 99);
  const randomValue2 = randomNumber(0, 99);
  const correctAnswer = String(getGcd(randomValue1, randomValue2));
  const question = `${randomValue1} ${randomValue2}`;
  return [question, correctAnswer];
};

export default () => commonLogic(rule, findGcd);
