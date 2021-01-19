/*
# Insertion Sort

Insertion sort picks an element in an array and inserts it in its correct position between 0 and the element preceding it.
The worst case run-time for insertion sort is O(n2), as we’ll swap every element with every other element.

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const [item] = arr.splice(i, 1);
        arr.splice(j, 0, item);
      }
    }
  }
  return arr;
}

//Test
const testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];
console.log(insertionSort(testArr));
