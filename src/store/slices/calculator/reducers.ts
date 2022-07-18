import {
  CalculatorStore,
  ActionType,
  CalculatorPayload,
  CalculatorMode,
  CalculatorValues,
} from "../../../types";
import { FinalResult, format } from "../../../logic";

const ZERO: string = "0";

export const initial: CalculatorStore = {
  currentValue: "0",
  prevValue: "0",
  currentResult: undefined,
  operator: {
    display: null,
    type: null,
  },
  mode: CalculatorMode.general,
};

//General
export const insert = (
  state: CalculatorStore,
  action: ActionType<any>
): CalculatorStore => {
  if (
    state.currentValue.length > 10 ||
    (String(state.currentValue).includes(".") && String(action.payload) === ".")
  )
    return state;

  if (state.currentValue === ZERO) {
    if (String(action.payload)?.startsWith(ZERO))
      return { ...state, currentValue: ZERO };
    if (String(action.payload)?.startsWith("."))
      return { ...state, currentValue: `${ZERO}.` };

    return { ...state, currentValue: action.payload };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${action.payload}`,
  };
};

export const clear = (
  state: CalculatorStore,
  action: ActionType<any>
): CalculatorStore => ({
  ...initial,
  mode: state.mode,
});

export const remove = (
  state: CalculatorStore,
  action: ActionType<any>
): CalculatorStore => {
  if (state.currentValue === undefined || state.currentValue.length === 1)
    return {
      ...state,
      currentValue: ZERO,
    };

  return {
    ...state,
    currentValue: state.currentValue.slice(0, state.currentValue.length - 1),
  };
};

export const operator = (
  state: CalculatorStore,
  action: ActionType<CalculatorPayload>
): CalculatorStore => {
  const obj = action.payload;

  const result =
    state.currentResult !== undefined
      ? state.currentResult(
          parseFloat(state.prevValue ?? ZERO),
          parseFloat(state.currentValue)
        )
      : Number(state.currentValue);

  return {
    ...state,
    currentValue: ZERO,
    prevValue:
      state.currentResult === undefined
        ? state.currentValue
        : FinalResult(result),
    currentResult: obj.predicate,
    operator: {
      display: obj.display,
      type: null,
    },
  };
};

export const operatorCurrentValue = (
  state: CalculatorStore,
  action: ActionType<CalculatorPayload>
): CalculatorStore => {
  if (state.currentValue === ZERO) return state;

  const result: number = action.payload.predicate
    ? action.payload.predicate(parseFloat(state.currentValue))
    : Number(state.currentValue);

  return {
    ...state,
    currentValue: FinalResult(result),
  };
};

export const total = (
  state: CalculatorStore,
  action: ActionType<any>
): CalculatorStore => {
  const result: number = state.currentResult
    ? state.currentResult(
        parseFloat(state.prevValue ?? ZERO),
        parseFloat(state.currentValue)
      )
    : Number(state.currentValue);

  return {
    ...state,
    prevValue: FinalResult(result),
    currentValue: ZERO,
  };
};

export const mode = (
  state: CalculatorStore,
  action: ActionType<CalculatorMode>
): CalculatorStore => ({ ...state, mode: action.payload });

//Scientific
export const insertScientific = (
  state: CalculatorStore,
  action: ActionType<CalculatorValues>
) => {
  let FinalResult = action.payload.alternativeValue ?? action.payload.value;

  if (state.currentValue === ZERO) {
    if (String(FinalResult)?.startsWith(ZERO))
      return { ...state, currentValue: ZERO };
    if (String(FinalResult)?.startsWith("."))
      return { ...state, currentValue: `${ZERO}.` };

    return { ...state, currentValue: FinalResult };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${FinalResult}`,
  };
};

export const operatorCurrentValueScientific = (
  state: CalculatorStore,
  action: ActionType<any>
) => {
  return state;
};
