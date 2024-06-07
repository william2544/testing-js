function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function reverseString (str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.split('').reverse().join('')
}

class Calculator{

    add(value1,value2){
        if (typeof value1 !== 'number' && typeof value2 !== 'number') {
            return '';
        }
        return value1 +value2;
    }
    subtract(value1,value2){
        if (typeof value1 !== 'number' && typeof value2 !== 'number') {
            return '';
        }
        return value1 - value2;
    }
    divide(value1,value2){
        if (typeof value1 !== 'number' && typeof value2 !== 'number') {
            return '';
        }
        if (value1 === 0 || value2 === 0) {
            return 0;
        }
        return value1 / value2;
    }
    multiply(value1,value2){
        if (typeof value1 !== 'number' && typeof value2 !== 'number') {
            return '';
        }
        return value1 * value2;
    }
}

                        // caesarCipher function
function caesarCipher(str,shift){
    return str
    .split('')
    .map(char=>shiftChar(char,shift))
    .join('')
}

function shiftChar(char,shift){
    const isUppercase=char >= 'A' && char <= 'Z';
    const isLowerCase = char >= 'a' && char <= 'z';

    if (isUppercase) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
    }else if (isLowerCase) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift)% 26) + 97);
    }else{
        return char;
    }
}


function analyzeArray(arr) {
    if (arr.length === 0) {
      return {
        average: 0,
        min: Infinity,
        max: -Infinity,
        length: 0
      };
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
  
    return {
      average,
      min,
      max,
      length
    };
  }

console.log(analyzeArray([1,8,3,4,2,6]));
module.exports={capitalize,reverseString,Calculator,caesarCipher,analyzeArray}