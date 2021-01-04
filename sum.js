function sum(a, b) {
  return a + b;
};
module.exports = sum;

function multiplyByTwo(number) {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};
module.exports = multiplyByTwo;
