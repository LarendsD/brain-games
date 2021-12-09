#!/usr/bin/env node
import greet from './src/cli.js';
import { Question, Answer, compare } from './src/index.js';

const name = greet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const randomValue = Math.floor(Math.random() * (99 + 1));
  Question(randomValue);
  let correctAnswer = '';
  if (randomValue % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
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
