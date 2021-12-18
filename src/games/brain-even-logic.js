import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const getCorrectAnswer = (number) => (number % 2 === 0);
const findEven = () => {
  const question = randomNumber(0, 99);
  const correctAnswer = getCorrectAnswer(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => commonLogic('Answer "yes" if the number is even, otherwise answer "no".', findEven);
