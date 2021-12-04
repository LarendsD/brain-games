// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

const greet = (greeting) => {
  console.log(`Hello, ${readlineSync.question(greeting)}!`);
};
export default greet;
