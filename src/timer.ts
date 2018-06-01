export class Timer {
  protected hrStart: [number, number];
  protected hrEnd: [number, number];

  constructor(autoStart = false) {
    this.reset();

    if (autoStart) {
      this.start();
    }
  }

  reset(): Timer {
    this.hrStart = null;
    this.hrEnd = null;
    return this;
  }

  start(): Timer {
    this.hrEnd = null;
    this.hrStart = process.hrtime();
    return this;
  }

  end(): Timer {
    if (this.hrStart === null) {
      throw new Error('End() called before start()');
    }
    this.hrEnd = process.hrtime(this.hrStart);
    return this;
  }

  nanoseconds(): number {
    const start = this.hrStart !== null ? this.hrStart : process.hrtime();
    const end = this.hrEnd !== null ? this.hrEnd : process.hrtime(start);
    return (end[0] * 1e9) + end[1];
  }

  milliseconds(): number {
    return this.nanoseconds() / 1e6;
  }

  seconds(): number {
    return this.nanoseconds() / 1e9;
  }
}
