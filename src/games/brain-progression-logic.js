import { randomNumber } from '../index.js';

const findProgression = () => {
  const randomIncriminateOfProgression = randomNumber(1, 15);
  const randomLengthOfProgression = randomNumber(5, 10);
  const randomProgression = [];
  let RandomFirstNumberOfProgression = randomNumber(1, 15);
  // create random progression;
  for (let k = 0; k < randomLengthOfProgression; k += 1) {
    randomProgression.push(RandomFirstNumberOfProgression);
    RandomFirstNumberOfProgression += randomIncriminateOfProgression;
  }
  // create random empty element of array;
  const randomIndex = randomNumber(0, randomLengthOfProgression - 1);
  const correctAnswer = String(randomProgression[randomIndex]);
  randomProgression[randomIndex] = '..';
  const question = randomProgression.join(' ');
  return `${question};${correctAnswer}`;
};
export default findProgression;
