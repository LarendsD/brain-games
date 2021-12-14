const findEven = () => {
  const randomValue = Math.floor(Math.random() * (99 + 1));
  let correctAnswer = '';
  console.log(`Question: ${randomValue}`);
  if (randomValue % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};
export default findEven;
