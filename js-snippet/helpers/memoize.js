function memoize(fn) {
  const cache = {};
  return function () {
    const args = JSON.stringify(arguments);
    if (cache[args]) {
      return cache[args];
    }
    const evaluatedValue = fn.apply(this, arguments);
    cache[args] = evaluatedValue;
    return evaluatedValue;
  };
}

// Test
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}
const memoizedFactorial = memoize(factorial);
memoizedFactorial(1000); // slow
memoizedFactorial(1000); // faster
