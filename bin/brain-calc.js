#!/usr/bin/env node
import greet from './src/cli.js';
import { Question, Answer, compare } from './src/index.js';

const name = greet();
console.log('What is the result of the expression?');
let i = 0;
while (i < 3) {
  const operators = '+-*';
  const randomNumber1 = Math.floor(Math.random() * (99 + 1));
  const randomNumber2 = Math.floor(Math.random() * (99 + 1));
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer = '';
  switch (randomOperator) {
    case '+':
      correctAnswer = String(randomNumber1 + randomNumber2);
      break;

    case '-':
      correctAnswer = String(randomNumber1 - randomNumber2);
      break;

    default:
      correctAnswer = String(randomNumber1 * randomNumber2);
      break;
  }
  const randomValue = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  Question(randomValue);
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
