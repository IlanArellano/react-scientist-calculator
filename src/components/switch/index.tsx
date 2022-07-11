import { ChangeEvent } from "react";
import { SizeObj, SizesType } from "../../types";

import "./styles.css";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  Inputsize?: SizesType;
}

export function Switch(props: Props) {
  return (
    <label className={`switch ${SizeObj[props.Inputsize ?? "l"]}`}>
      <input
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
        {...props}
      />
      <span className="slider round"></span>
    </label>
  );
}
