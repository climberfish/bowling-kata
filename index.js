function frameScore(frame, nextFrame) {
  const current = rawPoints(frame);
  if (frame[0] === 10) {
    return 10 + nextFrame[0] + nextFrame[1];
  }
  if (isSpare(frame)) {
    return current + nextFrame[0];
  }
  return current;
}

const isSpare = (frame) => rawPoints(frame) === 10;
const rawPoints = (frame) => frame[0] + frame[1];

module.exports = { frameScore };
