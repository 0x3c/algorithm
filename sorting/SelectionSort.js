const easy = require("../utils/index");

/**
 * 第一次从待排序的数组中选出最小的元素, 放到序列的起始位置,
 * 然后再从剩余的未排序元素中寻找最小的, 然后放到已排序的序列的末尾.
 * 以此类推, 直到全部待排序的数组元素个数为0.
 *
 * ! 先找到待排序数组中的最小元素, 再交换
 *
 * 时间复杂度:
 * 交换操作: 0 ~ n-1
 * 比较操作: n*(n-1)/2
 * 赋值操作: 3 * 交换操作复杂度
 */
class SelectionSort {
  sort(originArr) {
    const arr = [...originArr];

    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (easy.lessThan(arr[j], arr[minIdx])) {
          minIdx = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }

    return arr;
  }
}

module.exports = SelectionSort;
