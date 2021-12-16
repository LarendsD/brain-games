import { randomNumber } from '../index.js';

const findExpression = () => {
  const operators = '+-*';
  const randomNumber1 = randomNumber(0, 99);
  const randomNumber2 = randomNumber(0, 99);
  const randomOperator = operators[randomNumber(0, operators.length - 1)];
  let correctAnswer = '';
  switch (randomOperator) {
    case '+':
      correctAnswer = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      correctAnswer = String(randomNumber1 - randomNumber2);
      break;
    default:
      correctAnswer = String(randomNumber1 * randomNumber2);
  }
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return `${question};${correctAnswer}`;
};
export default findExpression;
