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
