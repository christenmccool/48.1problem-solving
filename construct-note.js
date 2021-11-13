// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length > letters.length) return false;

  let messageFreq = freqCounter(message.split(""));
  let lettersFreq = freqCounter(letters.split(""));

  for (let key in messageFreq) {
    if (!lettersFreq[key] || lettersFreq[key] < messageFreq[key] ) return false;
  }
  return true;
}

function freqCounter(arr) {
  return arr.reduce((accum,ele) => {
    accum[ele] = accum[ele] + 1 || 1;
    return accum;
  }, {});
}




