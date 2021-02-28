const { frameScore } = require(".");

test("Frame zerado", () => {
  const frame = [0, 0];
  const esperado = 0;
  const resultado = frameScore(frame);
  expect(resultado).toBe(esperado);
});

test("Frame normal", () => {
  const frame = [7, 2];
  const esperado = 9;
  const resultado = frameScore(frame);
  expect(resultado).toBe(esperado);
});

test("Frame com spare", () => {
  const frame = [6, 4];
  const proximoFrame = [5, 3];
  const esperado = 10 + 5;
  const resultado = frameScore(frame, proximoFrame);
  expect(resultado).toBe(esperado);
});
