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
    const current = this.rawPoints();
    if (this.isStrike()) {
      return this.strikeScore();
    }
    if (this.isSpare()) {
      return current + this.next.firstBall;
    }
    return current;
  }

  rawPoints() {
    return rawPoints(this.toArray());
  }

  strikeScore() {
    return strikeScore(
      this.next.toArray(),
      this.next.next && this.next.next.toArray()
    );
  }

  isStrike() {
    return isStrike(this.toArray());
  }

  isSpare() {
    return isSpare(this.toArray());
  }
}

function frameScore(frame, nextFrame, nextNextFrame) {
  const current = rawPoints(frame);
  if (isStrike(frame)) {
    return strikeScore(nextFrame, nextNextFrame);
  }
  if (isSpare(frame)) {
    return current + nextFrame[0];
  }
  return current;
}

function strikeScore(nextFrame, nextNextFrame) {
  if (isStrike(nextFrame)) {
    return 10 + 10 + nextNextFrame[0];
  }
  return 10 + rawPoints(nextFrame);
}

const isStrike = (frame) => frame[0] === 10;
const isSpare = (frame) => rawPoints(frame) === 10;
const rawPoints = (frame) => frame[0] + frame[1];

module.exports = { Frame, frameScore, isSpare, isStrike };
