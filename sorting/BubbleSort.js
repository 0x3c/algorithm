const easy = require("../utils/index");
class BubbleSort {
  sort(originArr) {
    const arr = [...originArr];
    console.log(arr);
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (easy.moreThan(arr[j], arr[j + 1])) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
  }
}
new BubbleSort().sort([
  99,
  432,
  423,
  423,
  51,
  51,
  346,
  31,
  67,
  137,
  14,
  578,
  28,
  45,
  87
]);
