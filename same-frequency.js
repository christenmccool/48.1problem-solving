// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1Str = `${num1}`;
  const num2Str = `${num2}`;

  if (num1Str.length !== num2Str.length) return false;

  let counter1 = findFreq(num1Str);
  let counter2 = findFreq(num2Str);

  if (counter1.size !== counter2.size) return false;
  for (let key of counter1.keys()) {
    if (counter1.get(key) !== counter2.get(key)) return false;
  }
  return true;
}

function findFreq(str) {
  let freqCounter = new Map();
  for (let char of str) {
    freqCounter.set(char, freqCounter.get(char)+1 || 1);
  }
  return freqCounter;
}
