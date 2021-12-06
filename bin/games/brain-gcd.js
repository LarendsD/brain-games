#!/usr/bin/env node
import greet from '../../src/cli.js';
import { Question, Answer, compare } from '../../src/index.js';

const name = greet();
console.log('Find the greatest common divisor of given numbers.');
const findgcd = (firstNumber, secondNumber) => {
  let maxdel = 0;
  let result = 0;
  if (firstNumber > secondNumber) {
    maxdel = (firstNumber / 2);
  } else {
    maxdel = (secondNumber / 2);
  }
  for (let del = 1; del < maxdel; del += 1) {
    if (firstNumber % del === 0 && secondNumber % del === 0) {
      result = del;
    }
  }
  return result;
};
let i = 0;
while (i < 3) {
  const randomValue1 = Math.floor(Math.random() * (99 + 1));
  const randomValue2 = Math.floor(Math.random() * (99 + 1));
  const randomValue = `${randomValue1} ${randomValue2}`;
  Question(randomValue);
  const correctAnswer = String(findgcd(randomValue1, randomValue2));
  const answer = Answer();
  if (compare(answer, correctAnswer) === true) {
    i += 1;
  } else {
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
