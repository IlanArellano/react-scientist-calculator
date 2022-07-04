import { useDispatch } from "react-redux";
import { Button } from "./buttons";
import { LogicButtons } from "../../logic";
import {
  insertInput,
  clearInput,
  operatorInput,
  totalInput,
} from "../../store/slices";
import { CalculatorTypes, CalculatorPayload } from "../../types";

export function Buttons() {
  const dispatch = useDispatch();

  const handleClick = (
    value: any,
    type: CalculatorTypes,
    name: string,
    predicate?: (num1: number, num2: number) => number
  ) => {
    switch (type) {
      case CalculatorTypes.display:
        dispatch(insertInput(value ?? 0));
        break;
      case CalculatorTypes.clear:
        dispatch(clearInput(null));
        break;
      case CalculatorTypes.operator:
        const obj: CalculatorPayload = {
          predicate,
          display: name,
          type: null,
        };
        dispatch(operatorInput(obj));
        break;
      case CalculatorTypes.total:
        dispatch(totalInput(null));
        break;
      default:
        break;
    }
  };

  return (
    <div className="buttons">
      {LogicButtons.map((x) => (
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
