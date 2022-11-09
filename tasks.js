export const stringLength = (string) => {
  return string.length;
};

export const stringLengthCheck = (string) => {
  if (!(10 >= string.length >= 1)) {
    throw new Error("The string is not suitable to be put");
  }
};

export const reverseString = (string) => {
  let reversedStr = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedStr += string[i];
  }
  return reversedStr;
};

export class Calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    if (y > x) {
      throw new Error("You cannot get a positive number like that!");
    }
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    if (x == 0 && y == 0) {
      throw new Error("You cannot divide 0 by itself!");
    }
    return x / y;
  }
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default {
  stringLength,
  stringLengthCheck,
  reverseString,
  Calculator,
  capitalize,
};
