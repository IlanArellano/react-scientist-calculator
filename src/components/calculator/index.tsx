import { useEffect, createRef } from "react";
import "./styles.css";
import { Buttons } from "../button";
import { Input } from "../input";
import { StoreProps } from "../../types";
import { useSelector } from "react-redux";
import { displayColor } from "../../logic";

export function Calculator() {
  const color = useSelector<StoreProps, any>((state) => state.colorSlice);

  const divRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const currentColor = displayColor(color);

    if (divRef.current) divRef.current.className = `calculator ${currentColor}`;

    return () => {
      if (divRef.current) divRef.current.className = "";
    };
  }, [color]);

  return (
    <div className="calculator" ref={divRef}>
      <Input />
      <Buttons />
    </div>
  );
}
