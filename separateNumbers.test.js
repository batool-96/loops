const { separateNumbersForLoop, separateNumbersWhileLoop, separateNumbersDoWhileLoop, } = require('./separateNumbers');

describe('separateNumbersForLoop', () => {
  it('should separate even and odd numbers using for loop', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [evenArr, oddArr] = separateNumbersForLoop(arr);
    expect(evenArr).toEqual([2, 4, 6, 8, 10]);
    expect(oddArr).toEqual([1, 3, 5, 7, 9]);
  });
});

describe('separateNumbersWhileLoop', () => {
  it('should separate even and odd numbers using while loop', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [evenArr, oddArr] = separateNumbersWhileLoop(arr);
    expect(evenArr).toEqual([2, 4, 6, 8, 10]);
    expect(oddArr).toEqual([1, 3, 5, 7, 9]);
  });
});

describe('separateNumbersDoWhileLoop', () => {
  it('should separate even and odd numbers using do-while loop', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [evenArr, oddArr] = separateNumbersDoWhileLoop(arr);
    expect(evenArr).toEqual([2, 4, 6, 8, 10]);
    expect(oddArr).toEqual([1, 3, 5, 7, 9]);
  });
});
