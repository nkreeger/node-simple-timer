export class Timer {
  protected hrStart: [number, number];
  protected hrEnd: [number, number];

  reset() {
    this.hrStart = null;
    this.hrEnd = null;
  }

  start() {
    this.hrEnd = null;
    this.hrStart = process.hrtime();
  }

  end() {
    if (this.hrStart === null) {
      throw new Error('End() called before start()');
    }
    this.hrEnd = process.hrtime(this.hrStart);
  }

  nanoseconds(): number {
    return (this.hrEnd[0] * 1e9) + this.hrEnd[1];
  }

  milliseconds(): number {
    return this.nanoseconds() / 1e6;
  }

  seconds(): number {
    return this.nanoseconds() / 1e9;
  }
}
