import { ChangeEvent } from 'react';
import { SizeObj, SizesType } from '../../types';

import './styles.css';

interface Props {
    checked?: boolean;
    onChange?: (evt: ChangeEvent<any>) => void;
    size?: SizesType;
}

export function Switch(props: Props) {
    return(
        <label className={`switch ${SizeObj[props.size ?? "l"]}`}>
            <input
              type="checkbox"
              onChange={props.onChange}
              checked={props.checked}
            />
            <span className="slider round"></span>
          </label>
    )
}