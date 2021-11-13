// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr.sort((a,b)=> a-b);
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === num) {
      count++;
      start++;
      end--;
    }
    else if (sum < num) start++;
    else if (sum > num) end--;
  }
  return count;
}



