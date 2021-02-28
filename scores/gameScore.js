const frameScore = require("./frameScore");

function gameScore(frames) {
  let scores = 0;
  for (const i of Array(10).keys()) {
    scores += frameScore(frames[i], frames[i + 1]);
  }
  return scores;
}

module.exports = gameScore;
