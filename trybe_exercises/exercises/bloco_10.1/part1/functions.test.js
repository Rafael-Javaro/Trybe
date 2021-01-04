const sum = require('./functions');

test('sums two values', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
});
