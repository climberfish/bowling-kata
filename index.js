function frameScore(frame, nextFrame) {
  const current = rawPoints(frame);
  if (isSpare(frame)) {
    return current + nextFrame[0];
  }
  return current;
}

const isSpare = (frame) => rawPoints(frame) === 10;
const rawPoints = (frame) => frame[0] + frame[1];

module.exports = { frameScore };
