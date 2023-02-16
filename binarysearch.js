// binary search

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      console.log(middle);
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

// first bad version

var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if (isBadVersion(middle)) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    return left;
  };
};

// search insert position

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};

const nums2 = [1, 3, 5, 6];
const target2 = 7;
console.log(searchInsert(nums2, target2));
