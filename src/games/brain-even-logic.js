import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const findEven = () => {
  const question = randomNumber(0, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => commonLogic(rule, findEven);
