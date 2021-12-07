#!/usr/bin/env node
import greet from '../../src/cli.js';
import { Question, Answer, compare } from '../../src/index.js';

const name = greet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let i = 0;
const IsNumberSimple = (num) => {
  for (let del = 2; del <= num / 2; del += 1) {
    if (num % del === 0) {
      return false;
    }
  }
  return true;
};
while (i < 3) {
  let correctAnswer = '';
  const randomNumber = Math.floor(Math.random() * (99 + 1));
  if (IsNumberSimple(randomNumber) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  Question(randomNumber);
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
