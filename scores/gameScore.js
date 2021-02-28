const { Frame } = require("./frameScore");

class Game {
  constructor(frames) {
    this.frames = frames;
  }

  static fromArrays(arrays) {
    const frames = [];
    for (let i = arrays.length - 1; i >= 0; i--) {
      frames.unshift(Frame.fromArray(arrays[i], frames[0]));
    }
    return new Game(frames);
  }

  score() {
    let scores = 0;
    for (const i of Array(8).keys()) {
      scores += this.frames[i].score();
    }
    scores += this.__penultFrameScore();
    scores += this.__lastFrameScore();
    return scores;
  }

  __penultFrameScore() {
    const [penultFrame, lastFrame] = this.frames.slice(8);

    if (penultFrame.isStrike() && lastFrame.isStrike()) {
      return 10 + 10 + lastFrame.firstBall;
    }
    return penultFrame.score();
  }

  __lastFrameScore() {
    const lastFrame = this.frames[9];

    if (lastFrame.isStrike())
      return 10 + lastFrame.secondBall + lastFrame.thirdBall;
    if (lastFrame.isSpare()) return 10 + lastFrame.thirdBall;

    return lastFrame.score();
  }
}

function gameScore(frames) {
  return Game.fromArrays(frames).score();
}

module.exports = gameScore;
