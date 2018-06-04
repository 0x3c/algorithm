const Tester = require("./tester");
const creator = require("./dataCreator");
const BubbleSort = require("../sorting/BubbleSort");
const QuickSort = require("../sorting/QuickSort");

const data = creator.createNum(9999);
const tester = new Tester();
tester.run(QuickSort, data);
