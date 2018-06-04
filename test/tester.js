class Tester {
  constructor() {
    this.result = null;
  }
  start() {
    this.timeStart = new Date().getTime();
  }
  end() {
    this.timeEnd = new Date().getTime();
  }
  run(SortClass, data) {
    const sorter = new SortClass();

    // console.log(data);

    this.start();
    this.result = sorter.sort(data);
    this.end();

    // console.log(this.result);

    this.log();
  }
  show() {
    console.log(this);
  }
  log() {
    console.log(`cost ${this.timeEnd - this.timeStart} ms`);
  }
}
module.exports = Tester;
