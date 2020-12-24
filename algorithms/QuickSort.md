# Quick Sort

Like merge sort, quick sort is also a “divide and conquer” algorithm. It picks an element as a pivot element and partitions the array around the pivot.

There are several methods of picking a pivot element:

- Always pick the first element
- Always pick the last element
- Pick a random element
- Pick the median element

There are some thoughts behind which pivot is the most performant, however for our purposes I will select the middle element.

On average quick sort has a runtime of O(n log n).

```JavaScript
function quickSort(array) {
  if (array.length < 2) return array;
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  let less = [];
  let greater = [];
  for (let i in array) {
    if (i !== pivotIndex) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i]);
    }
  }
  return [...quickSort(less),...quickSort(greater)];
}


const testArr = [9,8,7,6,5,4,3,2,1,0,-1];
console.log(quickSort(testArr));

```
