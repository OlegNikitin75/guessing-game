class GuessingGame {
  constructor() { }
  min = 0;
  max = 0;
  setRange(min, max) {
    this.min = min;
    this.max = max;
  }
  guess() {
    this.num = Math.round((this.min + this.max) / 2);
    return this.num;
  }
  lower() {
    this.max = this.num;
  }
  greater() {
    this.min = this.num;
  }
}

module.exports = GuessingGame;
