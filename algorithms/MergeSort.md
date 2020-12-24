# Bubble Sort

Bubble sort is a sorting algorithm where each value in an array is compared to the next and swapped if the value on the left is greater than the value on the right. Bubble sort is notorious for being nonperformant, with a runtime of O(n2).

You can use nested for-loops to code bubble sort, or a do while loop (which reads a bit cleaner and can be more performant).

The do-while loop solution will stop once a full pass is completed without swapping any items. This contrasts the nested for-loop solution which will test every item against every other regardless of if a swap has occurred.

Thus, with the do-while loop solution, even though the Big-O runtime remains O(n2), as it’s the worst possible scenario, it’s not as likely to have a dataset which requires n2 passes.

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
