export interface CalculatorStore {
  currentValue: string;
  prevValue: string | null;
  currentResult: ((num1: number, num2: number) => number) | undefined;
  operator: OperatorProps;
  mode: CalculatorMode;
}

export interface CalculatorPredicate {
  /** La operacion que realizara el boton al hacerle click */
  predicate?: (num1: number, num2: number) => number;
}

export interface CalculatorProps extends CalculatorPredicate {
  name: string;
  type: CalculatorTypes;
  value?: any;
  display: string;
  mode: CalculatorMode;
}

export enum CalculatorTypes {
  display = 1,
  operator = 2,
  clear = 3,
  total = 4,
  none = 5,
}

export enum CalculatorMode {
  general = 1,
  scientific = 2
}

export interface OperatorProps {
  display: string | null;
  type: OperatorTypes | null;
}

export interface CalculatorPayload extends OperatorProps, CalculatorPredicate {}

export enum OperatorTypes {
  add = 1,
  rest = 2,
  multiply = 3,
  division = 4,
}
