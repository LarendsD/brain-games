const IsNumberSimple = (num) => {
  for (let del = 2; del <= num / 2; del += 1) {
    if (num % del === 0) {
      return false;
    }
  }
  return true;
};
const findPrime = () => {
  let correctAnswer = '';
  const randomNumber = Math.floor(Math.random() * (99 + 1));
  console.log(`Question: ${randomNumber}`);
  if (IsNumberSimple(randomNumber) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};
export default findPrime;
