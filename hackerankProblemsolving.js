function compareTriplets(a, b) {
  if (a.length !== b.length) return;

  let tripletsArr = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      tripletsArr[0] += 1;
    } else if (a[i] < b[i]) {
      tripletsArr[1] += 1;
    }
  }
  return tripletsArr;
}

function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(secondaryDiagonal - primaryDiagonal);
}

function plusMinus(arr) {
  // Write your code here
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositive++;
    } else if (arr[i] < 0) {
      countNegative++;
    } else {
      countZero++;
    }
  }

  console.log((countPositive / arr.length).toFixed(6));
  console.log((countNegative / arr.length).toFixed(6));
  console.log((countZero / arr.length).toFixed(6));
}

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let stair = '';
    // add stair -> use stair in block so it was change when j increase
    for (let j = 1; j <= i; j++) {
      stair += '#';
    }

    // add space
    while (stair.length !== n) {
      stair = ' ' + stair;
    }
    console.log(stair);
  }
}

function miniMaxSum(arr) {
  // Write your code here
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum += arr[j];
      }
    }
    sumArr.push(sum);
  }

  let isAllArrayAreEqual = true;
  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] !== sumArr[0]) {
      isAllArrayAreEqual = false;
    }
  }

  isAllArrayAreEqual
    ? console.log(sumArr[0], sumArr[1])
    : console.log(Math.min(...sumArr), Math.max(...sumArr));
}

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = candles[0];
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    } else if (candles[i] > max) {
      max = candles[i];
    }
  }

  return count;
}

const time = '07:05:45PM';

function timeConversion(s) {
  // Write your code here
  const clock = s.substring(s.length - 2);

  let parsedTime = '';
  if (clock === 'AM') {
    const hour = s.substring(0, 2);
    const parsedHour = hour === '12' ? '00' : hour;
    parsedTime = `${parsedHour}${s.substring(2, s.length - 2)}`;
  }
  if (clock === 'PM') {
    const hour = s.substring(0, 2);
    const parsedHour = hour === '12' ? hour : +hour + 12;
    parsedTime = `${parsedHour}${s.substring(2, s.length - 2)}`;
  }

  return parsedTime;
}

function gradingStudents(grades) {
  // Write your code here

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) continue;
    const theNextMultiple5 = grades[i] + (5 - (grades[i] % 5));
    if (theNextMultiple5 - grades[i] < 3) {
      grades[i] = theNextMultiple5;
    }
  }

  return grades;
}

function maxCost(cost, labels, dailyCount) {
  // Write your code here
  let maxCost = 0;
  let count = 0;
  let currentCost = 0;

  for (let i = 0; i < cost.length; i++) {
    currentCost += cost[i];

    if (labels[i] === 'illegal') continue;
    count++;

    if (count === dailyCount) {
      count = 0;
      currentCost = 0;
    }
  }

  return maxCost;
}

function filledOrders(order, k) {
  // Write your code here
  order.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i <= order.length; i++) {
    if (order[i] <= k) {
      count++;
      k = k - order[i];
    } else {
      break;
    }
  }

  return count;
}

/**
 *  sam house start n end distance -> s,t
 * location of apple and orange tree -> a, b
 * num of distances at which each apple falls from the tree -> apples, oranges
 *  */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const calcDistanceAppleTree = apples
    .map((item) => {
      return a + item;
    })
    .filter((item) => item >= s && item <= t);
  const calcDistanceOrangeTree = oranges
    .map((item) => {
      return b + item;
    })
    .filter((item) => item >= s && item <= t);

  console.log(calcDistanceAppleTree.length);
  console.log(calcDistanceOrangeTree.length);
}

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  for (let i = 0; i <= 10000; i++) {
    if (x1 === x2) return 'YES';
    x1 += v1;
    x2 += v2;
  }

  return 'NO';
}

const a = [2, 4];
const b = [16, 32, 96];

function getTotalX(a, b) {
  // Write your code here

  let check = true;
  let count = 0;
  let i = a[a.length - 1];
  while (i <= b[0]) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) check = false;
    }

    for (let k = 0; k < b.length; k++) {
      if (b[k] % i !== 0) check = false;
    }

    if (check) {
      count++;
    } else {
      check = true;
    }
    i++;
  }

  return count;
}

function breakingRecords(scores) {
  // Write your code here
  let maxScore = scores[0];
  let minScore = scores[0];
  let countMax = 0;
  let countMin = 0;

  for (let i = 1; i <= scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      countMax++;
    }

    if (scores[i] < minScore) {
      minScore = scores[i];
      countMin++;
    }
  }

  return [countMax, countMin];
}

function birthday(s, d, m) {
  //  Write your code here

  if (!s.length || s.length < m) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const segment = s.slice(i, i + m);

    let total = 0;
    if (segment.length < m) break;
    for (let j = 0; j < segment.length; j++) {
      total += segment[j];
    }

    if (total === d) count++;
  }

  return count;
}

function divisibleSumPairs(n, k, ar) {
  // Write your code here

  let pairCount = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        pairCount += 1;
      }
      console.log(i, j);
    }
  }
  return pairCount;
}

const arrBird = [1, 4, 4, 4, 5, 3];

function migratoryBirds(arr) {
  // Write your code here
  let temp = [];
  let max = [];
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    temp.push(sorted[i]);
    if (sorted[i] !== sorted[i + 1]) {
      if (temp.length > max.length) {
        max = [...temp];
      }
      temp = [];
    }
  }

  return max[0];
}

function dayOfProgrammer(year) {
  // Write your code here
  const isLeapYear = (year) => {
    if (year < 1917) {
      return year % 4 === 0;
    } else {
      return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }
  };

  if (year === 1918) {
    return '26.09.1918';
  }

  return isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`;
}

function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    sum += bill[i];
  }

  const bActual = (sum - bill[k]) / 2;

  bActual === b ? console.log('Bon Appetit') : console.log(b - bActual);
}

function sockMerchant(n, ar) {
  // Write your code here

  // let numberOfSock = {};
  // let count = 0;
  // for (let i = 0; i < n; i++) {
  //   numberOfSock[ar[i]] = 0;
  // }
  // for (let i = 0; i < n; i++) {
  //   numberOfSock[ar[i]] += 1;
  // }

  // for (const key in numberOfSock) {
  //   count += Math.floor(numberOfSock[key] / 2);
  // }
  // return count;

  // 2nd solution

  let result = { pair: 0 };

  for (let i = 0; i < n; i++) {
    if (!result[ar[i]]) {
      result[ar[i]] = 1;
    } else {
      result[ar[i]] += 1;
    }

    if (result[ar[i]] % 2 === 0) result.pair += 1;
  }

  return result.pair;
}

function pageCount(n, p) {
  // Write your code here
}

function countingValleys(steps, path) {
  // Write your code here
  let level = 0;
  let valleyCount = 0;
  let inValley = false;
  for (let s = 0; s < steps; s++) {
    if (path[s] == 'U') level++;
    else level--;
    if (inValley && level == 0) valleyCount++;
    if (level < 0) inValley = true;
    else inValley = false;
  }

  console.log(valleyCount);
}

const steps = 'UDDDUDUU';
countingValleys(steps, 8);
