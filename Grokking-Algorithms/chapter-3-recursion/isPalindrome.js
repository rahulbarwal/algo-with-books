var isPalindrome = function (str) {
  // base case #1
  if ([0, 1].includes(str.length)) {
    return true;
  }

  // base case #2
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // recursive case

  return isPalindrome(str.substring(1, str.length - 1));
};

console.log(isPalindrome('rotor'));
