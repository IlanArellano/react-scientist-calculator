import React, { ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode | string;
  onclick?: () => void;
}

export function Button(props: Props) {
  return (
    <button className="buttonS buttonSWhite" onClick={props.onclick}>
      {props.children}
    </button>
  );
}
