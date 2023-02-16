// expected output: [1, 2, 3, 4, 5]

// Sorting
// bubble sort
const arr = [5, 3, 2, 4, 1];

const bbSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const selectSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;
    for (let currentIndex = i + 1; currentIndex < arr.length; currentIndex++) {
      if (arr[currentIndex] < arr[minimumIndex]) {
        minimumIndex = currentIndex;
      }
    }
    if (minimumIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minimumIndex];
      arr[minimumIndex] = temp;
    }
  }
  console.log(arr);
  return arr;
};

// merge sort
const arrForMergeSort = [-6, 20, 8, -2, 4];

const mergeSort1 = (arr) => {
  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // While both left and right arrays have elements, compare their current elements
    // and push the smaller one into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // After one of the arrays has been fully processed, concatenate the remaining elements
    // of the other array to the result array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };
  // Base case: if the array is of length 1 or less, return it
  if (arr.length <= 1) return arr;

  // Find the middle index of the array
  const mid = Math.floor(arr.length / 2);

  // Divide the array into two parts: the left half and the right half
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the two sorted halves back together
  return merge(sortedLeft, sortedRight);
};

const mergeSort2 = (arr) => {
  if (arr.length < 2) return arr;

  function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  return merge(mergeSort2(leftArr), mergeSort2(rightArr));
};

// quickSort
const arrForQuickSort = [-6, 20, 8, -2, 4];

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // recursive
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSortDescending(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // recursive
  return [...quickSort(right), pivot, ...quickSort(left)];
}
