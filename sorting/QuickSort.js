const easy = require("../utils/index");

/**
 * 取一个基准值, 小于该值的放一个数组, 大于该值的放另一个数组,
 * 递归这两个数组, 直至数组只剩一个元素, 由小到大拼合数组.
 *
 * 将 n 个元素的数组拆成 n个 length=1 的数组, 并拼合.
 *
 * 时间复杂度: O(nlog2n)
 * 最坏情况为数组划分为 长度为 n-1的数组和 空的数组. O(n^2)
 *
 */
class QuickSort {
  sort(originArr) {
    const arr = [...originArr];
    if (arr.length <= 1) {
      return arr;
    }
    const compareEle = arr.shift();
    const leftArr = [];
    const rightArr = [];
    while (arr.length) {
      const aimEle = arr.shift();
      if (easy.moreThan(aimEle, compareEle)) {
        rightArr.push(aimEle);
      } else {
        leftArr.push(aimEle);
      }
    }
    const leftSorted = this.sort(leftArr);
    const rightSorted = this.sort(rightArr);
    const sorted = leftSorted.concat([compareEle], rightSorted);
    return sorted;
  }
}

module.exports = QuickSort;
