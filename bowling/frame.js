class Frame {
  constructor(nextFrame, firstBall, secondBall, thirdBall) {
    this.next = nextFrame;
    this.firstBall = firstBall;
    this.secondBall = secondBall;
    this.thirdBall = thirdBall;
  }

  toArray() {
    return [this.firstBall, this.secondBall, this.thirdBall];
  }

  static fromArray(frame, nextFrame) {
    return new Frame(nextFrame, frame[0], frame[1], frame[2]);
  }

  score() {
    const current = this.__rawPoints();
    if (this.isStrike()) {
      return this.__strikeScore();
    }
    if (this.isSpare()) {
      return current + this.next.firstBall;
    }
    return current;
  }

  isStrike() {
    return this.firstBall === 10;
  }

  isSpare() {
    return !this.isStrike() && this.firstBall + this.secondBall === 10;
  }

  __rawPoints() {
    return this.firstBall + this.secondBall;
  }

  __strikeScore() {
    if (this.next.isStrike()) {
      return 10 + 10 + this.next.next.firstBall;
    }
    return 10 + this.next.__rawPoints();
  }
}

module.exports = Frame;
