// From https://adventofcode.com/2022/day/3
const fs = require('fs');
const setup = (inputPath = 'input.txt') => {
  return fs.readFileSync(inputPath, { encoding: 'utf-8' }).split('\n');
};

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const partOne = () => {
  const input = setup();
  let sumOfPriorities = 0;
  for (let rucksack of input) {
    const half = rucksack.length / 2;
    const firstCompartment = rucksack.slice(0, half);
    const secondCompartment = rucksack.slice(half, rucksack.length);
    let commonLetter;
    for (let letter of firstCompartment.split('')) {
      if (secondCompartment.indexOf(letter) !== -1) {
        commonLetter = letter;
        break;
      }
    }
    sumOfPriorities += priorities.indexOf(commonLetter) + 1;
  }
  console.log(`The sum of priorities is: ${sumOfPriorities}`);
};
const partTwo = () => {
  const input = setup();
  let sumOfPriorities = 0;
  for (let i = 0; i < input.length; i += 3) {
    const firstGroup = input[i];
    const secondGroup = input[i + 1];
    const thirdGroup = input[i + 2];
    let commonLetter;
    for (let letter of firstGroup.split('')) {
      if (
        secondGroup.indexOf(letter) !== -1 &&
        thirdGroup.indexOf(letter) !== -1
      ) {
        commonLetter = letter;
        break;
      }
    }
    sumOfPriorities += priorities.indexOf(commonLetter) + 1;
  }
  console.log(`The sum of priorities is: ${sumOfPriorities}`);
};
partOne();
partTwo();
