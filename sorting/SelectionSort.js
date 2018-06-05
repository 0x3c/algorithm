const easy = require("../utils/index");

class SelectionSort {
  sort(originArr) {
    const arr = [...originArr];

    for (let i = 0; i < arr.length - 1; i++) {
      let min = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        if (easy.lessThan(arr[j], arr[i])) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr;
  }
}

module.exports = SelectionSort;
