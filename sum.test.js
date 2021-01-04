const sum = require('./sum');
const multiplyByTwo = require('./sum'); 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });
