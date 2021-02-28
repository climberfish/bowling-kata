const { frameScore, isSpare, isStrike } = require("./frameScore");

function gameScore(frames) {
  let scores = 0;
  for (const i of Array(8).keys()) {
    scores += frameScore(frames[i], frames[i + 1], frames[i + 2]);
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
