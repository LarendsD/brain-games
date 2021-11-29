import readlineSync from 'readline-sync';
const greet = (greeting) => {
    greeting = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')
    console.log('Hello, '+ greeting);
}
export { greet };