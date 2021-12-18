const randomNumber = (min, max) => {
  // Generation of a random number, including the maximum in the range
  const result = Math.floor(Math.random() * ((max + 1) - min) + min);
  return result;
};
export default randomNumber;
