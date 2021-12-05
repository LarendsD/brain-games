#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const name = greet('Welcome to the Brain Games!\nMay I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const randomnumber = Math.floor(Math.random() * (99 + 1));
  console.log(`Question: ${randomnumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes' && randomnumber % 2 === 0) {
    i += 1;
    console.log('Correct!');
  } else if (answer === 'no' && randomnumber % 2 === 0) {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    break;
  } else if (answer === 'yes' && randomnumber % 2 === 1) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    break;
  } else if (answer === 'no' && randomnumber % 2 === 1) {
    i += 1;
    console.log('Correct!');
  } else {
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
