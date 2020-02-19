const easy = require("../utils/index");

/**
 * 不通过比较的排序, 以空间换时间, 以值为索引, 出现次数为值, 放入统计数组.
 * 用统计数组还原数组, 数组为排序后的数组.
 *
 * 时间复杂度: O(n)
 */
class CountingSort {
  sort(originArr) {
    const arr = [...originArr];
    const result = [];

    const A = [];
    for (let i = 0; i < arr.length; i++) {
      A[arr[i]] = A[arr[i]] === undefined ? 1 : A[arr[i]] + 1;
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] === undefined) continue;
      const nums = Array(A[i]).fill(i);
      result.push(...nums);
    }
    return result;
  }
}

module.exports = CountingSort;
