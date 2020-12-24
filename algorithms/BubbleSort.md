# Bubble Sort

Bubble sort is a sorting algorithm where each value in an array is compared to the next and swapped if the value on the left is greater than the value on the right. Bubble sort is notorious for being nonperformant, with a runtime of O(n2).

You can use nested for-loops to code bubble sort, or a do while loop (which reads a bit cleaner and can be more performant).

The do-while loop solution will stop once a full pass is completed without swapping any items. This contrasts the nested for-loop solution which will test every item against every other regardless of if a swap has occurred.

Thus, with the do-while loop solution, even though the Big-O runtime remains O(n2), as it’s the worst possible scenario, it’s not as likely to have a dataset which requires n2 passes.

```JavaScript
function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);

  return arr;
}

const testArr = [9,8,7,6,5,4,3,2,1,0,-1];
console.log(bubbleSort(testArr));

```
