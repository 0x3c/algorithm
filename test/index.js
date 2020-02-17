const Tester = require("./tester");
const creator = require("./dataCreator");
const BubbleSort = require("../sorting/BubbleSort");
const QuickSort = require("../sorting/QuickSort");
const SelectionSort = require("../sorting/SelectionSort");

const data = creator.createNum(9999);
const tester = new Tester();
tester.run(SelectionSort, data);
