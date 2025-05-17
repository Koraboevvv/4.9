function noSpace(x) {
  return x.replace(/\s/g, '');
}



function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function arrayDiff(a, b) {
  const result = [];
  for (const itemA of a) {
    if (!b.includes(itemA)) {
      result.push(itemA);
    }
  }
  return result;
}

function betterThanAverage(classPoints, yourPoints) {
  const classSum = classPoints.reduce((sum, point) => sum + point, 0);
  const classAverage = classSum / classPoints.length;
  return yourPoints > classAverage;
}

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  const highest = Math.max(...nums);
  const lowest = Math.min(...nums);
  return `${highest} ${lowest}`;
}

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function disemvowel(inputString) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

function shiftLeft(s1, s2) {
  let i = s1.length - 1;
  let j = s2.length - 1;
  let commonLength = 0;

  while (i >= 0 && j >= 0 && s1[i] === s2[j]) {
    commonLength++;
    i--;
    j--;
  }

  const moves1 = s1.length - commonLength;
  const moves2 = s2.length - commonLength;

  return moves1 + moves2;
}

function solution(number){
    if (number < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function getCount(str) {
  const vowels = "aeiou";
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}