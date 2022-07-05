import { CalculatorStore, ActionType, CalculatorPayload, CalculatorMode } from "../../../types";

const ZERO: string = "0";

export const initial: CalculatorStore = {
  currentValue: "0",
  prevValue: "0",
  currentResult: undefined,
  operator: {
    display: null,
    type: null,
  },
  mode: CalculatorMode.general
};

export const insert = (state: CalculatorStore, action: ActionType<any>) => {
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

export const clear = (state: CalculatorStore, action: ActionType<any>) => ({...initial, mode: state.mode});

export const operator = (state: CalculatorStore, action: ActionType<any>) => {
  const obj = action.payload as CalculatorPayload;

  return {
    ...state,
    currentValue: "0",
    prevValue:
      state.currentResult === undefined
        ? state.currentValue
        : String(
            state.currentResult(
              parseFloat(state.prevValue ?? "0"),
              parseFloat(state.currentValue)
            )
          ),
    currentResult: obj.predicate,
    operator: {
      display: obj.display,
      type: null,
    },
  };
};

export const total = (state: CalculatorStore, action: ActionType<any>) => ({
  ...state,
  prevValue: String(
    state.currentResult?.(
      parseFloat(state.prevValue ?? "0"),
      parseFloat(state.currentValue)
    ) ?? state.currentValue
  ),
  currenValue: "0",
});

export const mode = (state: CalculatorStore, action: ActionType<CalculatorMode>) => ({...state, mode: action.payload});
