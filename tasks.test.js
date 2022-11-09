import {
  stringLength,
  stringLengthCheck,
  reverseString,
  Calculator,
  capitalize,
} from "./tasks.js";

describe("Task 1 checks the string functions", () => {
  it("works", () => {
    expect(stringLength("mert")).toBe(4);
  });

  it("checkCondition", () => {
    expect(() => {
      stringLengthCheck("asdfdasfasdfdasfdas");
    }).toThrowError("The string is not suitable to be put");
  });

  it("Greater than 1", () => {
    expect(stringLength("mert")).toBeGreaterThan(1);
  });

  it("Less than 19", () => {
    expect(stringLength("mert")).toBeLessThan(19);
  });
});

describe("Task 2 checks the reverseString function", () => {
  it("Checks if reverseString function works properly", () => {
    expect(reverseString("mert")).toBe("trem");
  });
});

describe("Task 3 checks the Calculator class", () => {
  let operation;
  beforeEach(() => {
    operation = new Calculator();
  });

  it("Checks the addition function", () => {
    expect(operation.add(17, 34)).toBe(51);
    expect(operation.add(48, 57)).toBeGreaterThan(100);
    expect(operation.add(48, 33)).toBeLessThan(100);
  });

  it("Checks the subtraction function", () => {
    expect(operation.subtract(50, 13)).toBe(37);
    expect(operation.subtract(50, 38)).toBeLessThan(30);
    expect(() => {
      operation.subtract(3, 5);
    }).toThrowError("You cannot get a positive number like that!");
  });

  it("Checks the multiplication function", () => {
    expect(operation.multiply(13, 7)).toBe(91);
    expect(operation.multiply(15, 7)).toBeLessThan(300);
    expect(typeof operation.multiply(3, 7)).toBe("number");
  });

  it("Checks the division function", () => {
    expect(() => {
      operation.divide(0, 0);
    }).toThrowError("You cannot divide 0 by itself!");
    expect(operation.divide(34, 17)).toBe(2);
    expect(operation.divide(13, 7)).toBeGreaterThan(1);
  });
});

describe("Task 4 Check capitalize function", () => {
  it("Checks the capitalize function", () => {
    expect(capitalize("emre")).toBe("Emre");
    expect(typeof capitalize("wow")).toBe("string");
  });
});
