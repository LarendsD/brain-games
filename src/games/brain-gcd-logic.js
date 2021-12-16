import { randomNumber } from '../index.js';

const findgcd = () => {
  const randomValue1 = randomNumber(0, 99);
  const randomValue2 = randomNumber(0, 99);
  let maxdel = 0;
  let correctAnswer = 0;
  const question = `${randomValue1} ${randomValue2}`;
  if (randomValue1 === randomValue2) {
    return `${question};${String(randomValue2)}`;
  } if (randomValue1 > randomValue2) {
    maxdel = (randomValue1 / 2);
  } else {
    maxdel = (randomValue2 / 2);
  }
  for (let del = 1; del < maxdel; del += 1) {
    if (randomValue1 % del === 0 && randomValue2 % del === 0) {
      correctAnswer = String(del);
    }
  }
  return `${question};${correctAnswer}`;
};
export default findgcd;
