const testMethods = require('./assessment-funcs');

test('reverseString', () => {
  expect(
    testMethods.reverseStringBy(
      'what was the thing you said?\nyes it was',
      '\n'
    )
  ).toBe('tahw saw eht gniht uoy ?dias \nsey ti saw \n');
});

test('check beginning and end YES', () => {
  expect(testMethods.checkBeginningAndEnd('soon\nnoup\npoop\npoost')).toBe(
    'YES'
  );
});

test('check beginning and end NO', () => {
  expect(testMethods.checkBeginningAndEnd('soon\nsoup\npoop\npoost')).toBe(
    'NO'
  );
});
