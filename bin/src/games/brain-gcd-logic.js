const findgcd = () => {
  const randomValue1 = Math.floor(Math.random() * (99 + 1));
  const randomValue2 = Math.floor(Math.random() * (99 + 1));
  let maxdel = 0;
  let result = 0;
  console.log(`Question: ${randomValue1} ${randomValue2}`);
  if (randomValue1 === randomValue2) {
    return String(randomValue2);
  } if (randomValue1 > randomValue2) {
    maxdel = (randomValue1 / 2);
  } else {
    maxdel = (randomValue2 / 2);
  }
  for (let del = 1; del < maxdel; del += 1) {
    if (randomValue1 % del === 0 && randomValue2 % del === 0) {
      result = String(del);
    }
  }
  return result;
};
export default findgcd;
