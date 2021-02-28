const Frame = require("./frame");

class Game {
  constructor(frames) {
    this.frames = frames;
  }

  static fromArrays(arrays) {
    const frames = [];
    for (let i = arrays.length - 1; i >= 0; i--) {
      const isLastFrame = i === 9;
      const isPenultFrame = i === 8;
      frames.unshift(
        Frame.fromArray(arrays[i], frames[0], { isLastFrame, isPenultFrame })
      );
    }
    return new Game(frames);
  }

  score() {
    let scores = 0;
    for (const i of Array(10).keys()) {
      scores += this.frames[i].score();
    }
    return scores;
  }
}

module.exports = Game;
