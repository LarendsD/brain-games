import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const generateProgression = (randIncOfProg, randLenOfProg) => {
  let RandFirstNumOfProg = randomNumber(1, 15);
  const randomProgression = [];
  for (let k = 0; k < randLenOfProg; k += 1) {
    randomProgression.push(RandFirstNumOfProg);
    RandFirstNumOfProg += randIncOfProg;
  }
  return randomProgression;
};
const findProgression = () => {
  const randIncOfProg = randomNumber(1, 15);
  const randLenOfProg = randomNumber(5, 10);
  const randomIndex = randomNumber(0, randLenOfProg - 1);
  const progression = generateProgression(randIncOfProg, randLenOfProg);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => commonLogic('What number is missing in the progression?', findProgression);
