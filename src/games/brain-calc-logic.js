import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const getCorrectAnswer = (randomNumber1, randomOperator, randomNumber2) => {
  switch (randomOperator) {
    case '+':
      return String(randomNumber1 + randomNumber2);
    case '-':
      return String(randomNumber1 - randomNumber2);
    default:
      return String(randomNumber1 * randomNumber2);
  }
};
const findExpression = () => {
  const operators = '+-*';
  const randomNumber1 = randomNumber(0, 99);
  const randomNumber2 = randomNumber(0, 99);
  const randomOperator = operators[randomNumber(0, operators.length - 1)];
  const correctAnswer = getCorrectAnswer(randomNumber1, randomOperator, randomNumber2);
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return [question, correctAnswer];
};
export default () => commonLogic('What is the result of the expression?', findExpression);
