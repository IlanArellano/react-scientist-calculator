import { CalculatorStore } from "../calculator";

export interface ActionType<T> {
  payload: T;
  type: string;
}

export interface StoreProps {
  colorSlice: string;
  InputSlice: CalculatorStore;
}
