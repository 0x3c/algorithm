const easy = require("../utils/index");

/**
 * 通过比较相邻元素并将最大(小)值移动至一端, 一次扫描找出一个最大(小)元素, 并从未排序列表继续扫描.
 * 若一次扫描没有出现交换, 则说明当前未排序数组已经排好顺序.
 *
 * 时间复杂度:
 * 最好情况 n-1 -> O(n)
 * 最坏情况 n * (n-1) / 2 ->  O(n^2)
 */
class BubbleSort {
  sort(originArr) {
    const arr = [...originArr];
    let isSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      isSwap = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (easy.moreThan(arr[j], arr[j + 1])) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        } else {
          isSwap = true;
        }
      }
      if (!isSwap) {
        return arr;
      }
    }
    return arr;
  }
}
module.exports = BubbleSort;
