// From https://adventofcode.com/2022/day/4
const fs = require('fs');
const setup = (inputPath = 'input.txt') => {
  return fs.readFileSync(inputPath, { encoding: 'utf-8' }).split('\n');
};
const partOne = () => {
  const input = setup();
  let numOverlap = 0;
  for (let pairs of input) {
    const [firstElf, secondElf] = pairs.split(',');
    const [firstStart, firstEnd] = firstElf.split('-');
    const [secondStart, secondEnd] = secondElf.split('-');
    if (
      (+firstStart >= +secondStart && +firstEnd <= +secondEnd) ||
      (+secondStart >= +firstStart && +secondEnd <= +firstEnd)
    ) {
      numOverlap += 1;
    }
  }
  console.log(`Number of pairs with overlap: ${numOverlap}`);
};
const partTwo = () => {
  const input = setup();
  let numOverlap = 0;
  for (let pairs of input) {
    const [firstElf, secondElf] = pairs.split(',');
    const [firstStart, firstEnd] = firstElf.split('-');
    const [secondStart, secondEnd] = secondElf.split('-');
    if (
      (+firstStart >= +secondStart && +firstStart <= +secondEnd) ||
      (+firstEnd >= +secondStart && +firstEnd <= +secondEnd) ||
      (+secondStart >= +firstStart && +secondStart <= +firstEnd) ||
      (+secondEnd >= +firstStart && +secondEnd <= +firstEnd)
    ) {
      numOverlap += 1;
    }
  }
  console.log(`Number of pairs with overlap: ${numOverlap}`);
};
partOne();
partTwo();
