const { frameScore, isSpare } = require("./frameScore");

function gameScore(frames) {
  let scores = 0;
  for (const i of Array(9).keys()) {
    scores += frameScore(frames[i], frames[i + 1], frames[i + 2]);
  }
  if (isSpare(frames[9])) scores += 10 + frames[9][2];
  else scores += frameScore(frames[9]);
  return scores;
}

module.exports = gameScore;
