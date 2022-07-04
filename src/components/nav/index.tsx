import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps } from "../../types";
import { setColor } from "../../store/slices";
import { DarkSVG, LightSVG } from "../svg";
import { WHITE, colorsArray } from "../../logic";

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
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={switchInput}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
