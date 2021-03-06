import { CalculatorProps, CalculatorTypes, CalculatorMode } from "../../types";
import { factorial } from "../../logic";

export const LogicButtons: CalculatorProps[] = [
  {
    name: "second",
    display: "",
    type: CalculatorTypes.none,
    mode: CalculatorMode.scientific,
  },
  {
    name: "pi",
    display: "π",
    value: Math.PI,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
    alternativeValue: Math.PI.toFixed(2),
  },
  {
    name: "e",
    display: "e",
    value: Math.E,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
    alternativeValue: Math.E.toFixed(2),
  },
  {
    name: "clear",
    display: "CE",
    type: CalculatorTypes.clear,
    mode: CalculatorMode.general,
  },
  {
    name: "remove",
    display: "<--",
    type: CalculatorTypes.remove,
    mode: CalculatorMode.general,
  },
  {
    name: "pow2",
    display: "x^2",
    type: CalculatorTypes.operatorCurrentValue,
    predicate: (num) => num ** 2,
    mode: CalculatorMode.general,
    alternativeValue: "{0}^2",
  },
  {
    name: "intrinsic",
    display: "1/x",
    type: CalculatorTypes.operatorCurrentValue,
    predicate: (num) => 1 / num,
    mode: CalculatorMode.general,
    alternativeValue: "1/{0}",
  },
  {
    name: "absulute",
    display: "|x|",
    type: CalculatorTypes.operatorCurrentValue,
    mode: CalculatorMode.scientific,
    alternativeValue: "|{0}|",
  },
  {
    name: "scientist_totation",
    display: "exp",
    type: CalculatorTypes.operatorCurrentValue,
    mode: CalculatorMode.scientific,
    alternativeValue: "exp({0})",
  },
  {
    name: "mod",
    display: "mod",
    type: CalculatorTypes.operatorCurrentValue,
    mode: CalculatorMode.scientific,
    alternativeValue: "{0}mod({1})",
  },
  {
    name: "sqrt",
    display: "√",
    type: CalculatorTypes.operatorCurrentValue,
    predicate: (num) => Math.sqrt(num),
    mode: CalculatorMode.general,
    alternativeValue: "sqrt({0})",
  },
  {
    name: "left_parent",
    display: "(",
    type: CalculatorTypes.operatorCurrentValue,
    mode: CalculatorMode.scientific,
    value: "(",
  },
  {
    name: "right_parent",
    display: ")",
    type: CalculatorTypes.display,
    mode: CalculatorMode.scientific,
    value: ")",
  },
  {
    name: "factorial",
    display: "n!",
    type: CalculatorTypes.operatorCurrentValue,
    mode: CalculatorMode.scientific,
    alternativeValue: "{0}!",
    predicate: (num) => factorial(num),
  },
  {
    name: "division",
    display: "÷",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 / (num2 ?? 0),
    mode: CalculatorMode.general,
    value: "/",
  },
  {
    name: "pow",
    display: "x^y",
    type: CalculatorTypes.display,
    mode: CalculatorMode.scientific,
    alternativeValue: "({0}^{1})",
    predicate: (num1, num2) => num1 ** (num2 ?? 0),
  },
  {
    name: "seven",
    display: "7",
    value: 7,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "eight",
    display: "8",
    value: 8,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "nine",
    display: "9",
    value: 9,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "multiply",
    display: "x",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 * (num2 ?? 0),
    mode: CalculatorMode.general,
    value: "x",
  },
  {
    name: "_10pow",
    display: "10^x",
    type: CalculatorTypes.display,
    mode: CalculatorMode.scientific,
    alternativeValue: "10^{0}",
    predicate: (num) => 10 ** num,
  },
  {
    name: "four",
    display: "4",
    value: 4,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "five",
    display: "5",
    value: 5,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "six",
    display: "6",
    value: 6,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "rest",
    display: "-",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 - (num2 ?? 0),
    mode: CalculatorMode.general,
    value: "-",
  },
  {
    name: "log",
    display: "log",
    type: CalculatorTypes.display,
    mode: CalculatorMode.scientific,
    alternativeValue: "log({0})",
    predicate: (num) => Math.log10(num),
  },
  {
    name: "one",
    display: "1",
    value: 1,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "two",
    display: "2",
    value: 2,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "three",
    display: "3",
    value: 3,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "sum",
    display: "+",
    type: CalculatorTypes.operator,
    predicate: (num1, num2) => num1 + (num2 ?? 0),
    mode: CalculatorMode.general,
    value: "+",
  },
  {
    name: "ln",
    display: "ln",
    type: CalculatorTypes.display,
    mode: CalculatorMode.scientific,
    alternativeValue: "ln({0})",
    predicate: (num) => Math.log(num),
  },
  {
    name: "sum_rest",
    display: "+/-",
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
    alternativeValue: "-{0}",
  },
  {
    name: "zero",
    display: "0",
    value: 0,
    type: CalculatorTypes.display,
    mode: CalculatorMode.general,
  },
  {
    name: "point",
    display: ".",
    type: CalculatorTypes.display,
    value: ".",
    mode: CalculatorMode.general,
  },
  {
    name: "total",
    display: "=",
    type: CalculatorTypes.total,
    mode: CalculatorMode.general,
  },
];
