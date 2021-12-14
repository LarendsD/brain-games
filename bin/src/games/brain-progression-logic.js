const findProgression = () => {
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
  console.log(`Question: ${result}`);
  return correctAnswer;
};
export default findProgression;
