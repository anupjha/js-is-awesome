# Merge Sort

Merge sort is a “divide and conquer” algorithm which means it divides its input array into two halves and recursively calls itself on each half, then merges the two sorted halves back together.

The time complexity of merge sort is O(n log n).

The mergeSort function is responsible for splitting the array into smaller sub-arrays while the merge function is the function which sorts the arrays.

```JavaScript
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  let results = [...sorted, ...left, ...right];
  return results;
}

const testArr = [9,8,7,6,5,4,3,2,1,0,-1];
console.log(mergeSort(testArr));

```
