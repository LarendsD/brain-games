const findExpression = () => {
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
  }
  console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
  return correctAnswer;
};
export default findExpression;
