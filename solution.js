const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every(num => num >= 2)
};

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(num => num < 5)
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num => num % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  return words.find(word => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex(num => num % 3 === 0)
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex(word => word.length < 2)
};

// For Each

const logValuesTimes3 = () => {
  nums.forEach(num => console.log(num *3))
};

const logWordsWithExclamation = () => {
  words.forEach(word => console.log(word.length === "!"))
};

//Ask if we were meant to show the thoughts questions confused on if I have to show the process.

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((num, index) => num * num * index)
  //why ya making me do math -_0
};

const arrayWordsUpcased = () => {
  return words.map(word => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some(num => num % 7 ===  0)
};

const doSomeWordsHaveAnA = () => {
  return words.some(word => word.includes('a'))
};

//BONUS SECTION 

//reduce
const addAllTheNumbers = () => {

}

const conCatAllWords = () => {

}

//sort
const letsNotArgue = () => {

}

const sortTheNumbers = () => {

}

const sortTheWords = () => {

}

// Array Methods Challenge Problems

const isPanagram = () => {

}

const filterProducts = () => {

}

const sortAlphabetically = () => {

}


module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
  addAllTheNumbers,
  conCatAllWords, 
  letsNotArgue,
  sortTheNumbers,
  sortTheWords,
  isPanagram,
  filterProducts,
  sortAlphabetically
};
