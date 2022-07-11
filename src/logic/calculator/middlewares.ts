const MATH_ERROR: string = "Math Error!";
const SYNTAX_ERROR: string = "Syntax Error!";

const OperatorErrors = ["NaN", "Infinity"];

export const FinalResult = (value: number): string => {
  return OperatorErrors.find((x) => String(value).includes(x))
    ? MATH_ERROR
    : String(value);
};
