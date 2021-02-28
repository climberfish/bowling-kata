const { frameScore, gameScore } = require("./scores");

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

test("Frame com strike", () => {
  const frame = [10, 0];
  const proximoFrame = [1, 2];
  const esperado = 10 + 1 + 2;
  const resultado = frameScore(frame, proximoFrame);
  expect(resultado).toBe(esperado);
});

test("Frame com strike duplo", () => {
  const frame = [10, 0];
  const proximoFrame = [10, 0];
  const maisUmFrame = [2, 2];
  const esperado = 10 + 10 + 2;
  const resultado = frameScore(frame, proximoFrame, maisUmFrame);
  expect(resultado).toBe(esperado);
});

test("Jogo simples", () => {
  const jogo = [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ];
  const esperado = 3 * 10;
  const resultado = gameScore(jogo);
  expect(resultado).toBe(esperado);
});

test("Jogo com spare", () => {
  const jogo = [
    [1, 9],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ];
  const esperado = 10 + 1 + 3 * 9;
  const resultado = gameScore(jogo);
  expect(resultado).toBe(esperado);
});

test("Jogo com strike simples", () => {
  const jogo = [
    [10, 0],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ];
  const esperado = 10 + 1 + 2 + 3 * 9;
  const resultado = gameScore(jogo);
  expect(resultado).toBe(esperado);
});

test("Jogo com strike duplo", () => {
  const jogo = [
    [10, 0],
    [10, 0],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ];
  const esperado = 10 + 10 + 1 + (10 + 1 + 2) + 3 * 8;
  const resultado = gameScore(jogo);
  expect(resultado).toBe(esperado);
});
