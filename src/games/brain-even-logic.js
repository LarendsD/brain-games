import { randomNumber } from '../index.js';

const findEven = () => {
  const question = randomNumber(0, 99);
  let correctAnswer = '';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return `${question};${correctAnswer}`;
};
export default findEven;
