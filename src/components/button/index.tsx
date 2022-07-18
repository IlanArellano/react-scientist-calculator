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
  insertScientificInput,
  operatorCurrentValueScientificInput,
} from "../../store/slices";
import {
  CalculatorTypes,
  CalculatorPayload,
  StoreProps,
  CalculatorStore,
  CalculatorProps,
  CalculatorMode,
  CalculatorValues,
} from "../../types";

export function Buttons() {
  const calculator = useSelector<StoreProps, CalculatorStore>(
    (state) => state.InputSlice
  );

  const dispatch = useDispatch();

  const handleClick = (x: CalculatorProps) => {
    if (calculator.mode === CalculatorMode.scientific) {
      switch (x.type) {
        case CalculatorTypes.none:
          break;
        case CalculatorTypes.clear:
          dispatch(clearInput(null));
          break;
        case CalculatorTypes.total:
          break;
        case CalculatorTypes.remove:
          dispatch(removeInput(null));
          break;
        case CalculatorTypes.operatorCurrentValue:
          dispatch(operatorCurrentValueScientificInput(x.alternativeValue));
          break;
        default:
          const obj: CalculatorValues = {
            value: x.value,
            alternativeValue: x.alternativeValue,
          };
          dispatch(insertScientificInput(obj));
          break;
      }
      return;
    }

    switch (x.type) {
      case CalculatorTypes.display:
        dispatch(insertInput(x.value ?? 0));
        break;
      case CalculatorTypes.clear:
        dispatch(clearInput(null));
        break;
      case CalculatorTypes.operator:
        const obj1: CalculatorPayload = {
          predicate: x.predicate,
          display: x.display,
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
          predicate: x.predicate,
          display: x.display,
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
        <Button key={x.name} onclick={() => handleClick(x)}>
          {x.display}
        </Button>
      ))}
    </div>
  );
}
