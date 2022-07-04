import { CalculatorProps, CalculatorTypes, CalculatorMode } from "../../types";

export const LogicButtons: CalculatorProps[] = [
  {
    name: "second",
    display: "2nd",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "pi",
    display: "π",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "e",
    display: "1",
    value: 1,
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "clear",
    display: "CE",
    type: CalculatorTypes.clear,
    mode: CalculatorMode.general
  },
  {
    name: "remove",
    display: "<--",
    type: CalculatorTypes.none,
    mode: CalculatorMode.general
  },
  {
    name: "pow2",
    display: "x^2",
    type: CalculatorTypes.none,
    mode: CalculatorMode.general
  },
  {
    name: "intrinsic",
    display: "1/x",
    type: CalculatorTypes.none,
    mode: CalculatorMode.general
  },
  {
    name: "absulute",
    display: "|x|",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "scientist_totation",
    display: "exp",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "mod",
    display: "mod",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "sqrt",
    display: "√",
    type: CalculatorTypes.none,
    mode: CalculatorMode.general
  },
  {
    name: "left_parent",
    display: "(",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "right_parent",
    display: ")",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "factorial",
    display: "n!",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "division",
    display: "÷",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 / num2,
    mode: CalculatorMode.general
  },
  {
    name: "pow",
    display: "x^y",
    type: CalculatorTypes.none,
    mode: CalculatorMode.general
  },
  {
    name: "seven",
    display: "7",
    value: 7,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "eight",
    display: "8",
    value: 8,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "nine",
    display: "9",
    value: 9,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "multiply",
    display: "x",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 * num2,
    mode: CalculatorMode.general
  },
  {
    name: "_10pow",
    display: "10^x",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "four",
    display: "4",
    value: 4,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "five",
    display: "5",
    value: 5,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general 
  },
  {
    name: "six",
    display: "6",
    value: 6,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "rest",
    display: "-",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 - num2,
    mode: CalculatorMode.general
  },
  {
    name: "log",
    display: "log",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "one",
    display: "1",
    value: 1,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "two",
    display: "2",
    value: 2,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "three",
    display: "3",
    value: 3,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "sum",
    display: "+",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 + num2,
    mode: CalculatorMode.general
  },
  {
    name: "ln",
    display: "ln",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific
  },
  {
    name: "sum_rest",
    display: "+/-",
    type: CalculatorTypes.none,
    mode: CalculatorMode.general
  },
  {
    name: "zero",
    display: "0",
    value: 0,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general
  },
  {
    name: "point",
    display: ".",
    type: CalculatorTypes.display,
    value: ".",
    mode: CalculatorMode.general
  },
  {
    name: "total",
    display: "=",
    type: CalculatorTypes.total,
    mode: CalculatorMode.general
  },
];
