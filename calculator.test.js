const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 195;
    actual = sum(100, 95);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    expected = -11;
    actual = sum(-6, -5);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);

    
  });

});

describe('subtract', () => {

  test('can subtract two negative numbers', () => {
    expected = 5;
    actual = subtract(-5, -10);
    expect(actual).toBe(expected);
  });

  test('can subtract', () => { 
    expected = 195;
    actual = subtract(200, 5);
    expect(actual).toBe(expected);
    
  });



});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 30;
    actual = multiply(5, 6);
    expect(actual).toBe(expected);
  });

  test('can multiply a positive number with a negative number', () => { 
    expected = 100;
    actual = multiply(10, -10);
    expect(actual).toBe(expected);
    
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 10;
    actual = divide(50, 5);
    expect(actual).toBe(expected);
  });

  test('can divide a postive with a negative', () => { 
    expected = -20;
    actual = divide(40, -2);
    expect(actual).toBe(expected);
    
  });

});

describe('modulus', () => {

  test('can find modulus of two small positive numbers', () => {
    expected = 1;
    actual = modulus(10, 3);
    expect(actual).toBe(expected);
  });

  test('can retrun zero if numbers are fully divisible', () => { 
    expected = 0;
    actual = modulus(100, 10);
    expect(actual).toBe(expected);
    
  });
});

describe('even', () => {
  test('can see if neagtive number is even', () => {
    expected = true;
    actual = even(-10, 2);
    expect(actual).toBe(expected);
  });

  test('can see if positive number is even', () => { 
    expected = true;
    actual = even(100, 2);
    expect(actual).toBe(expected);
    
  });

  test('can see if positive number isnt even', () => {
    expected = false;
    actual = even(7, 2);
    expect(actual).toBe(expected);
  });


});

describe('odd', () => {
  test('can see number is odd ', () => {
    expected = true;
    actual = sum(9, 2);
    expect(actual).toBe(expected);
  });

  test('can see if number isnt odd', () => { 
    expected = false;
    actual = sum(100, 2);
    expect(actual).toBe(expected);
    
  });

});
