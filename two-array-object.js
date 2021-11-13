// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let twoArrayObj = {};

  arr1.forEach((ele, i) => {
    twoArrayObj[ele] = arr2[i] || null;
  })

  return twoArrayObj;
}

