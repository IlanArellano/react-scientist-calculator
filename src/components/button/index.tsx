import { useDispatch, useSelector } from "react-redux";
import { Button } from "./buttons";
import { LogicButtons } from "../../logic";
import {
  insertInput,
  clearInput,
  operatorInput,
  totalInput,
  removeInput,
  operatorCurrentValueInput,
} from "../../store/slices";
import {
  CalculatorTypes,
  CalculatorPayload,
  StoreProps,
  CalculatorStore,
  CalculatorProps,
  CalculatorMode,
} from "../../types";

export function Buttons() {
  const calculator = useSelector<StoreProps, CalculatorStore>(
    (state) => state.InputSlice
  );

  const dispatch = useDispatch();

  const handleClick = (
    value: any,
    type: CalculatorTypes,
    name: string,
    predicate?: (num1: number, num2?: number) => number
  ) => {
    switch (type) {
      case CalculatorTypes.display:
        dispatch(insertInput(value ?? 0));
        break;
      case CalculatorTypes.clear:
        dispatch(clearInput(null));
        break;
      case CalculatorTypes.operator:
        const obj1: CalculatorPayload = {
          predicate,
          display: name,
          type: null,
        };
        dispatch(operatorInput(obj1));
        break;
      case CalculatorTypes.total:
        dispatch(totalInput(null));
        break;
      case CalculatorTypes.remove:
        dispatch(removeInput(null));
        break;
      case CalculatorTypes.operatorCurrentValue:
        const obj2: CalculatorPayload = {
          predicate,
          display: name,
          type: null,
        };
        dispatch(operatorCurrentValueInput(obj2));
        break;
      default:
        break;
    }
  };

  const mapCondition = (x: CalculatorProps): boolean => {
    if (calculator.mode === CalculatorMode.general)
      return x.mode === CalculatorMode.general;

    return true;
  };

  return (
    <div
      className={`buttons ${
        calculator.mode === CalculatorMode.general ? "general" : "scientific"
      }`}
    >
      {LogicButtons.filter(mapCondition).map((x) => (
        <Button
          key={x.name}
          onclick={() => handleClick(x.value, x.type, x.display, x.predicate)}
        >
          {x.display}
        </Button>
      ))}
    </div>
  );
}
