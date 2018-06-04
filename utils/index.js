const lessThan = (x, y) => x < y;
const moreThan = (x, y) => x > y;
const lessEqThan = (x, y) => x <= y;
const moreEqThan = (x, y) => x >= y;
const eq = (x, y) => x === y;

const easy = {
  lessThan,
  moreThan,
  lessEqThan,
  moreEqThan,
  eq
};
module.exports = easy;
