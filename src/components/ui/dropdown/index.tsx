import React from 'react'
import Calendar from '../../../icons/calendar';
import Pointer from '../../../icons/pointer';

export interface IDropdown {
  color?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  disable?: boolean;
  icon?: String;
  outline?: boolean;
  hideicon?: boolean;
  pointer?: boolean;
  size?: 'small' | 'normal' | 'large';
}

const Dropdown: React.FC<IDropdown> = ((props) => {
  return (
    <select
      style={{
        background: props.color === 'secondary' ? 'orange' : 'lightblue',
        borderRadius: props.rounded ? 100 : 2,
        outline: props.outline ? 'dashed' : 'double',
        width: props.size == 'small' ? 70 : 120,
        height: props.size == 'small' ? 30 : 50,
        cursor: props.pointer ? 'pointer' : '',
        // backgroundColor:props.disable? 'gray':''
      }}
    >
      <option value="hello">1</option>
      <option value="hello">2</option>
      <option value="hello">3</option>
      <option value="hello">4</option>
    </select>
  );
}
);
export default Dropdown
