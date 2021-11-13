// add whatever parameters you deem necessary
function pivotIndex(arr) {
  if (arr.length < 3) return -1;

  let sum = arr.reduce((accum, ele) => accum+ele);
  let leftSum = 0;
  let rightSum = sum - arr[0];

  for (let i=1; i < arr.length -1; i++) {
    leftSum += arr[i-1];
    rightSum -= arr[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
}

