const easy = require("../utils/index");

/**
 * 先使子序列有序, 再使子序列段间有序. 
 * 将两个有序表合并成一个有序表 - 二路归并
 *
 * 稳定排序
 * 时间复杂度: O(n) = O(nlogn)
 */
class MergeSort {
  /**
   *
   * @param {number[]} left
   * @param {number[]} right
   * @returns {number[]}
   */
  merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        sorted.push(right.shift());
      } else {
        sorted.push(left.shift());
      }
    }
    return sorted.concat(left, right);
  }
  sort(originArr) {
    const arr = [...originArr];

    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(this.sort(left), this.sort(right));
  }
}

module.exports = MergeSort;
