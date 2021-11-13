// add whatever parameters you deem necessary
function separatePositive(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start]<0 && arr[end]>0) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    else if (arr[start] > 0) start++;
    else if (arr[end] < 0) end--;

  }
  return arr;
}





// function separatePositive(arr) {
//   let firstNeg = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       let temp = arr[firstNeg];
//       arr[firstNeg] = arr[i];
//       arr[i] = temp;
//       firstNeg++; 
//     }
//   }
//   return arr;
// }


