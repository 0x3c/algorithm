const Tester = require("./tester");
const creator = require("./dataCreator");
const BubbleSort = require("../sorting/BubbleSort");

const data = creator.createNum(9999);
const sorter = new BubbleSort();

const tester = new Tester(sorter.sort, data);

tester.run();
// tester.show();
