// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let start = 0;
  for (let i=0; i<str2.length; i++) {
    if (str2[i] === str1[start]) start++;
    if (start === str1.length) return true;
  }
  return false;
}


