const { Frame, frameScore, isSpare, isStrike } = require("./frameScore");

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
    scores += penultFrameScore(
      this.frames[8].toArray(),
      this.frames[9].toArray()
    );
    scores += lastFrameScore(this.frames[9].toArray());
    return scores;
  }
}

function gameScore(frames) {
  return Game.fromArrays(frames).score();
}

const penultFrameScore = (penultFrame, lastFrame) => {
  if (isStrike(penultFrame) && isStrike(lastFrame)) {
    return 10 + 10 + lastFrame[1];
  }
  return frameScore(penultFrame, lastFrame);
};

function lastFrameScore(lastFrame) {
  if (isStrike(lastFrame)) return 10 + lastFrame[1] + lastFrame[2];
  if (isSpare(lastFrame)) return 10 + lastFrame[2];

  return frameScore(lastFrame);
}

module.exports = gameScore;
