const MATH_ERROR: string = "Math Error!";
const SYNTAX_ERROR: string = "Syntax Error!";

const OperatorErrors = ["NaN", "Infinity"];

export const FinalResult = (value: number): string => {
  return OperatorErrors.find((x) => String(value).includes(x))
    ? MATH_ERROR
    : String(value);
};

const LastNumberValue = (currentValue: string): number => {
  let numstr: string = "0";

  for (let i = currentValue.length; i !== 0; i--) {
    if (isNaN(Number(currentValue[i]))) break;
    if (numstr.startsWith("0") && currentValue[i] === "0") numstr = "";

    numstr += currentValue[i];
  }

  //Ya que se consiguieron los numeros del string se voltearan los valores para que quede de la forma original
  numstr = numstr.split("").reverse().join("");

  return Number(numstr);
};
