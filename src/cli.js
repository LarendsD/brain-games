// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

const greet = (greeting) => {
  const name = readlineSync.question(greeting);
  console.log(`Hello, ${name}!`);
  return name;
};
export default greet;
