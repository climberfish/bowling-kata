function frameScore(frame, nextFrame) {
  const current = frame[0] + frame[1];
  if (current === 10) return current + nextFrame[0];
  return current;
}

module.exports = { frameScore };
