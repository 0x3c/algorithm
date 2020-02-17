const easy = require("../utils/index");

/**
 * 数组分成两部分, 已排序数组和未排序数组, 每次从未排序数组中取出一个元素,
 * 插入到已排序数组中正确的位置, 直到未排序数组为空.
 *
 * 稳定排序
 * 时间复杂度: O(n) = O(n^2)
 * 最好情况, 每次都插入到第一个位置 n-1 -> O(n)
 *
 */
class InsertionSort {
  sort(originArr) {
    const arr = [...originArr];

    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (easy.lessThan(arr[i], arr[j])) {
          const temp = arr[i];
          arr.splice(i, 1);
          arr.splice(j, 0, temp);
          break;
        }
      }
    }

    return arr;
  }
}

module.exports = InsertionSort;
