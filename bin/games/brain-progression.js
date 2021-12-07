#!/usr/bin/env node
import greet from '../../src/cli.js';
import { Question, Answer, compare } from '../../src/index.js';

const name = greet();
console.log('What number is missing in the progression?');
let i = 0;
while (i < 3) {
  const randomIncriminateOfProgression = Math.floor(Math.random() * (15 + 1));
  const randomLengthOfProgression = Math.floor(Math.random() * (11 - 5) + 5);
  const randomProgression = [];
  let RandomFirstNumberOfProgression = Math.floor(Math.random() * (15 + 1));
  // create random progression;
  for (let k = 0; k < randomLengthOfProgression; k += 1) {
    randomProgression.push(RandomFirstNumberOfProgression);
    RandomFirstNumberOfProgression += randomIncriminateOfProgression;
  }
  // create random empty element of array;
  const randomIndex = Math.floor(Math.random() * (randomLengthOfProgression));
  const correctAnswer = String(randomProgression[randomIndex]);
  randomProgression[randomIndex] = '..';
  const result = randomProgression.join(' ');
  Question(result);
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
