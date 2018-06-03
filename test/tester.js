class Tester {
  constructor(fn, data) {
    this.fn = fn;
    this.data = data;
    this.result = null;
  }
  start() {
    //
    this.timeStart = new Date().getTime();
  }
  end() {
    //
    this.timeEnd = new Date().getTime();
  }
  run() {
    //
    this.start();
    // your code
    this.result = this.fn(this.data);
    this.end();
    this.log();
  }
  test() {
    //
  }
  show() {
    console.log(this);
  }
  log() {
    console.log(`cost ${this.timeEnd - this.timeStart} ms`);
  }
}
module.exports = Tester;
