const {capitalize,reverseString,Calculator,caesarCipher,analyzeArray}=require('./index')
let calculator=new Calculator()


test('check if first word is capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});
test('If the first letter is not small letter, do not chenge',()=>{
    expect(capitalize('Hello')).toBe('Hello')
});
test('if the str is empty return empty',()=>{
    expect(capitalize('')).toBe('')
});

test('test if the word is reversing',()=>{
    expect(reverseString('will')).toBe('lliw');
})

test('test addition',()=>{
    expect(calculator.add(4,4)).toBe(8);
})
test('division of 10 by 2 should return 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('testing wrapping from z to a',()=>{
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('xyz', 3)).toBe('abc');
})
test('testing punctuation, Hello should return KhOOr', ()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})
test('analyzeArray returns correct object for [1, 8, 3, 4, 2, 6]', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });