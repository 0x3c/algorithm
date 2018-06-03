const randNumCreator = _ => Math.random() * 10000;

const createData = (fn1, num) =>
  Array.from({ length: num }).map(_ => randNumCreator());

const createNum = num => createData(randNumCreator, num);

module.exports = {
  createNum
};
