import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const getCorrectAnswer = (number1, number2) => {
  let maxdel = 0;
  let result = 0;
  if (number1 === number2) {
    return String(number2);
  } if (number1 > number2) {
    maxdel = (number1 / 2);
  } else {
    maxdel = (number2 / 2);
  }
  for (let del = 1; del < maxdel; del += 1) {
    if (number1 % del === 0 && number2 % del === 0) {
      result = String(del);
    }
  }
  return result;
};
const findgcd = () => {
  const randomValue1 = randomNumber(0, 99);
  const randomValue2 = randomNumber(0, 99);
  const correctAnswer = getCorrectAnswer(randomValue1, randomValue2);
  const question = `${randomValue1} ${randomValue2}`;
  return [question, correctAnswer];
};
export default () => commonLogic('Find the greatest common divisor of given numbers.', findgcd);
