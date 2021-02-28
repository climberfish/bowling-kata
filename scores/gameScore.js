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
}

function gameScore(frames) {
  let scores = 0;
  const game = Game.fromArrays(frames);
  for (const i of Array(8).keys()) {
    scores += game.frames[i].score();
  }
  scores += penultFrameScore(frames[8], frames[9]);
  scores += lastFrameScore(frames[9]);
  return scores;
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
