import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps } from "../../types";
import { setColor } from "../../store/slices";
import { DarkSVG, LightSVG } from "../svg";
import { WHITE, colorsArray } from "../../logic";
import { Switch } from '../switch';

import "./styles.css";

export function Nav() {
  const [switchInput, setSwitchInput] = useState<boolean>(true);
  const color = useSelector<StoreProps, string>((state) => state.colorSlice);

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const index: number = colorsArray.indexOf(color);
    if (index === -1) return;

    const displayColor: string =
      index === colorsArray.length - 1
        ? colorsArray[0]
        : colorsArray[index + 1];

    setSwitchInput(displayColor === WHITE);
    dispatch(setColor(displayColor));
  };

  useEffect(() => {
    document.body.classList.add(color);

    return () => {
      document.body.classList.remove(color);
    };
  }, [color]);

  return (
    <nav>
      <div className="NavContainer">
        <div className="switchContainer">
          {switchInput ? <LightSVG /> : <DarkSVG />}
          <Switch checked={switchInput} onChange={handleChange} />
        </div>
      </div>
    </nav>
  );
}
