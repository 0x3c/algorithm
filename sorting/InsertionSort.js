const easy = require("../utils/index");

class InsertionSort {
  sort(originArr) {
    const arr = [...originArr];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j <= i; j++) {
        if (easy.lessThan(arr[i], arr[j])) {
          const temp = arr[i];
          arr.splice(i, 1);
          arr.splice(j, 0, temp);
        }
      }
    }

    return arr;
  }
}

module.exports = InsertionSort;
