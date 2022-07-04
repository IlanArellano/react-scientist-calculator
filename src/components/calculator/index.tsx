import { useEffect, createRef, useState, ChangeEvent } from "react";
import "./styles.css";
import { Buttons } from "../button";
import { Input } from "../input";
import { StoreProps } from "../../types";
import { useSelector } from "react-redux";
import { displayColor } from "../../logic";
import { Switch } from '../switch';

export function Calculator() {
  const [Scientist, setScientist] = useState<boolean>();
  const color = useSelector<StoreProps, any>((state) => state.colorSlice);

  const divRef = createRef<HTMLDivElement>();

  const handleChange = (e: ChangeEvent<any>) => {


    setScientist(prev => !prev);
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
        <span>{Scientist ? 'Scientific' : 'Normal'}</span>
        <Switch size="l" checked={Scientist} onChange={handleChange} />
      </div>
      <Input />
      <Buttons />
    </div>
  );
}
