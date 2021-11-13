// add whatever parameters you deem necessary
function longestFall(arr) {
  if (arr.length === 0) return 1;
  let longest = 1;
  let current = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      current++;
      if (current > longest) longest = current;
    }
    else {
      current = 1;
    }
  }
  return longest;
}

