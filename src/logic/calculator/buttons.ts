import { CalculatorProps, CalculatorTypes } from "../../types";

export const LogicButtons: CalculatorProps[] = [
  {
    name: "second",
    display: "2nd",
    type: CalculatorTypes.none,
  },
  {
    name: "pi",
    display: "π",
    type: CalculatorTypes.none,
  },
  {
    name: "e",
    display: "1",
    value: 1,
    type: CalculatorTypes.none,
  },
  {
    name: "clear",
    display: "CE",
    type: CalculatorTypes.clear,
  },
  {
    name: "remove",
    display: "<--",
    type: CalculatorTypes.none,
  },
  {
    name: "pow2",
    display: "x^2",
    type: CalculatorTypes.none,
  },
  {
    name: "intrinsic",
    display: "1/x",
    type: CalculatorTypes.none,
  },
  {
    name: "absulute",
    display: "|x|",
    type: CalculatorTypes.none,
  },
  {
    name: "scientist_totation",
    display: "exp",
    type: CalculatorTypes.none,
  },
  {
    name: "mod",
    display: "mod",
    type: CalculatorTypes.none,
  },
  {
    name: "sqrt",
    display: "√",
    type: CalculatorTypes.none,
  },
  {
    name: "left_parent",
    display: "(",
    type: CalculatorTypes.none,
  },
  {
    name: "right_parent",
    display: ")",
    type: CalculatorTypes.none,
  },
  {
    name: "factorial",
    display: "n!",
    type: CalculatorTypes.none,
  },
  {
    name: "division",
    display: "÷",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 / num2,
  },
  {
    name: "pow",
    display: "x^y",
    type: CalculatorTypes.none,
  },
  {
    name: "seven",
    display: "7",
    value: 7,
    type: CalculatorTypes.display,
  },
  {
    name: "eight",
    display: "8",
    value: 8,
    type: CalculatorTypes.display,
  },
  {
    name: "nine",
    display: "9",
    value: 9,
    type: CalculatorTypes.display,
  },
  {
    name: "multiply",
    display: "x",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 * num2,
  },
  {
    name: "_10pow",
    display: "10^x",
    type: CalculatorTypes.none,
  },
  {
    name: "four",
    display: "4",
    value: 4,
    type: CalculatorTypes.display,
  },
  {
    name: "five",
    display: "5",
    value: 5,
    type: CalculatorTypes.display,
  },
  {
    name: "six",
    display: "6",
    value: 6,
    type: CalculatorTypes.display,
  },
  {
    name: "rest",
    display: "-",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 - num2,
  },
  {
    name: "log",
    display: "log",
    type: CalculatorTypes.none,
  },
  {
    name: "one",
    display: "1",
    value: 1,
    type: CalculatorTypes.display,
  },
  {
    name: "two",
    display: "2",
    value: 2,
    type: CalculatorTypes.display,
  },
  {
    name: "three",
    display: "3",
    value: 3,
    type: CalculatorTypes.display,
  },
  {
    name: "sum",
    display: "+",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 + num2,
  },
  {
    name: "ln",
    display: "ln",
    type: CalculatorTypes.none,
  },
  {
    name: "sum_rest",
    display: "+/-",
    type: CalculatorTypes.none,
  },
  {
    name: "zero",
    display: "0",
    value: 0,
    type: CalculatorTypes.display,
  },
  {
    name: "point",
    display: ".",
    type: CalculatorTypes.display,
    value: ".",
  },
  {
    name: "total",
    display: "=",
    type: CalculatorTypes.total,
    predicate: (num1, num2) => num1 / num2,
  },
];
