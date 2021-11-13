// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end])/2;
    if (avg === target) {
      return true;
    } else if (avg > target) {
      end--;
    } else {
      start++;
    }
  }
  return false;
}
