import { useEffect, createRef } from "react";
import { useSelector } from "react-redux";
import { StoreProps, CalculatorStore } from "../../types";
import { displayColor } from "../../logic";
import "./styles.css";

export function Input() {
  const input = useSelector<StoreProps, CalculatorStore>(
    (state) => state.InputSlice
  );

  const color = useSelector<StoreProps, string>((state) => state.colorSlice);

  const divRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const currentColor = displayColor(color);

    if (divRef.current) divRef.current.className = `display ${currentColor}`;

    return () => {
      if (divRef.current)
        divRef.current.classList.remove(".display", `.${currentColor}`);
    };
  }, [color]);

  return (
    <div className="Input">
      <span className="current">{input.prevValue}</span>
      <div ref={divRef}>
        <span>
          {input.currentValue}
          {input.operator.display}
        </span>
      </div>
    </div>
  );
}
