const { frameScore, isSpare } = require("./frameScore");

function gameScore(frames) {
  let scores = 0;
  for (const i of Array(9).keys()) {
    scores += frameScore(frames[i], frames[i + 1], frames[i + 2]);
  }
  scores += lastFrameScore(frames[9]);
  return scores;
}

function lastFrameScore(lastFrame) {
  if (isSpare(lastFrame)) return 10 + lastFrame[2];

  return frameScore(lastFrame);
}

module.exports = gameScore;
