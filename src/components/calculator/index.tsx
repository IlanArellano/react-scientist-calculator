import { useEffect, createRef, useState, ChangeEvent } from "react";
import "./styles.css";
import { Buttons } from "../button";
import { Input } from "../input";
import { StoreProps, CalculatorStore, CalculatorMode } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { displayColor } from "../../logic";
import { Switch } from "../switch";
import { modeInput } from "../../store/slices";

export function Calculator() {
  const [Scientist, setScientist] = useState<boolean>(false);
  const dispatch = useDispatch();
  const color = useSelector<StoreProps, any>((state) => state.colorSlice);
  const calculator = useSelector<StoreProps, CalculatorStore>(
    (state) => state.InputSlice
  );

  const divRef = createRef<HTMLDivElement>();

  const handleChange = (e: ChangeEvent<any>) => {
    let mode: CalculatorMode = calculator.mode;
    if (calculator.mode === CalculatorMode.general)
      mode = CalculatorMode.scientific;
    if (calculator.mode === CalculatorMode.scientific)
      mode = CalculatorMode.general;

    const isGeneral: boolean = calculator.mode === CalculatorMode.general;

    dispatch(modeInput(mode));
    setScientist(isGeneral);
  };

  useEffect(() => {
    const currentColor = displayColor(color);

    if (divRef.current) divRef.current.className = `calculator ${currentColor}`;

    return () => {
      if (divRef.current) divRef.current.className = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <div className="calculator" ref={divRef}>
      <div className="mode">
        <span>{Scientist ? "Scientific" : "Normal"}</span>
        <Switch
          disabled={true}
          Inputsize="l"
          checked={Scientist}
          onChange={handleChange}
        />
      </div>
      <Input />
      <Buttons />
    </div>
  );
}
