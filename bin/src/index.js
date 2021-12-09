import readlineSync from 'readline-sync';

const Question = (value) => {
  console.log(`Question: ${value}`);
};
const Answer = () => (readlineSync.question('Your answer: '));
const compare = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export { Question, Answer, compare };
