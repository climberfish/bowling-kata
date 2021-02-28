class Frame {
  constructor(
    nextFrame,
    firstBall,
    secondBall,
    thirdBall,
    { isLastFrame, isPenultFrame } = {}
  ) {
    this.next = nextFrame;
    this.firstBall = firstBall;
    this.secondBall = secondBall;
    this.thirdBall = thirdBall;
    this.isLastFrame = isLastFrame;
    this.isPenultFrame = isPenultFrame;
  }

  toArray() {
    return [this.firstBall, this.secondBall, this.thirdBall];
  }

  static fromArray(frame, nextFrame, props) {
    return new Frame(nextFrame, frame[0], frame[1], frame[2], props);
  }

  score() {
    if (this.isLastFrame) return this.__lastFrameScore();
    if (this.isPenultFrame) return this.__penultFrameScore();

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

  __lastFrameScore() {
    if (this.isStrike()) return 10 + this.secondBall + this.thirdBall;
    if (this.isSpare()) return 10 + this.thirdBall;

    return this.__asTrivial().score();
  }

  __penultFrameScore() {
    if (this.isStrike() && this.next.isStrike()) {
      return 10 + 10 + this.next.firstBall;
    }
    return this.__asTrivial().score();
  }

  __asTrivial() {
    return new Frame(
      this.next,
      this.firstBall,
      this.secondBall,
      this.thirdBall,
      {}
    );
  }
}

module.exports = Frame;
