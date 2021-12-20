import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const operators = '+-*';
const rule = 'What is the result of the expression?';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const findExpression = () => {
  const randomNumber1 = randomNumber(1, 99);
  const randomNumber2 = randomNumber(1, 99);
  const randomOperator = operators[randomNumber(0, operators.length - 1)];
  const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return [question, correctAnswer];
};

export default () => commonLogic(rule, findExpression);
