const frameScore = require("./frameScore");

function gameScore(frames) {
  let scores = 0;
  for (frame of frames) {
    scores += frameScore(frame);
  }
  return scores;
}

module.exports = gameScore;
