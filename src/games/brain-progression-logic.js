import randomNumber from '../randomNumber.js';
import commonLogic from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (step, length, firstNumber) => {
  const progression = [];
  let number = 0;
  for (let k = 0; k < length; k += 1) {
    number = firstNumber + (step * k);
    progression.push(number);
  }
  return progression;
};

const hideNumberOfProgression = (progression, indexOfNumber) => {
  const result = progression.slice(0);
  result[indexOfNumber] = '..';
  return result.join(' ');
};

const findProgression = () => {
  const step = randomNumber(1, 15);
  const randomLength = randomNumber(5, 10);
  const randomFirstNumber = randomNumber(1, 15);
  const hiddenIndex = randomNumber(0, randomLength - 1);
  const randomProgression = generateProgression(step, randomLength, randomFirstNumber);
  const correctAnswer = String(randomProgression[hiddenIndex]);
  const question = hideNumberOfProgression(randomProgression, hiddenIndex);
  return [question, correctAnswer];
};

export default () => commonLogic(rule, findProgression);
