var power = function (x, n) {
  // base case
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }

  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -1 * n);
  }

  // recursive case: n is odd
  if (n % 2 !== 0) {
    const calc = power(x, (n - 1) / 2);
    return x * calc * calc;
  }

  // recursive case: n is even
  if (n % 2 === 0) {
    const calc = power(x, n / 2);
    return calc * calc;
  }
};

console.log(power(3, 9));

/**
 * 3, pow(3, 4)^2
 * pow(3, 2)^2
 * pow(3,1)^2
 * 3
 */
