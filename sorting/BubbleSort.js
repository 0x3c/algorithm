const easy = require("../utils/index");

class BubbleSort {
  sort(originArr) {
    const arr = [...originArr];
    let isSwap = false;
    for (let i = 0; i < arr.length - 2; i++) {
      isSwap = false;
      for (let j = 0; j < arr.length - i; j++) {
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
