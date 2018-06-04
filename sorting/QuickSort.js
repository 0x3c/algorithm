const easy = require("../utils/index");

class QuickSort {
  sort(originArr) {
    const arr = [...originArr];
    if (arr.length <= 1) {
      return arr;
    }
    const compareEle = arr.shift();
    const centerArr = [compareEle];
    const leftArr = [];
    const rightArr = [];
    while (arr.length) {
      const aimEle = arr.shift();
      if (easy.eq(aimEle, compareEle)) {
        centerArr.push(aimEle);
      } else if (easy.moreThan(aimEle, compareEle)) {
        rightArr.push(aimEle);
      } else {
        leftArr.push(aimEle);
      }
    }
    const leftSorted = this.sort(leftArr);
    const rightSorted = this.sort(rightArr);
    const sorted = leftSorted.concat(centerArr, rightSorted);
    return sorted;
  }
}

module.exports = QuickSort;
