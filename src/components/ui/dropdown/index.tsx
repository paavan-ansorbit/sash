import React from 'react';
import clsx from 'clsx';
import Contrast from '../../../components/ui/contrast';

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};
export interface IDropdown {
  bgcolor?: string;
  rounded?: boolean;
  icon?: string;
  size?: 'small' | 'normal' | 'large';
  shadow?: boolean;
  iconposition?: boolean;
  loading?: boolean;
  list?: { name: string }[];
}

const Dropdown: React.FC<IDropdown> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }

  return (
    <select
      className={clsx(
        'border selectit inline-block flex-1   hover:opacity-70 justify-between items-center pointer-events-auto',
        props.bgcolor === 'secondary'
          ? 'border-orange-400'
          : 'border-yellow-400',
        props.rounded ? 'rounded-full' : 'rounded-md',
        props.size === 'small' ? 'px-3' : 'px-4',
        props.size === 'small' ? 'py-1' : 'py-2',
        props.shadow ? 'shadow-xl' : 'shadow-none',
        props.iconposition ? 'flex-row' : 'flex-row-reverse'
      )}
      style={{
        color: colorcoltrast(cbc),
        backgroundColor: props.bgcolor,
        WebkitAppearance: 'none',
      }}
    >
      <option value="" selected disabled hidden>
        {/* &#182; */}
        {/* {!!props.icon && ( */}
        {/* <Icon
            icon={'Link'}
            className={clsx(
              'h-4 items-center w-4',
              props.iconposition ? 'mr-2' : 'ml-2',
              'fill-current',
              props.hideicon ? 'hidden' : 'inline-block'
              )}
              style={{ color: props.iconcolor }}
              /> */}
        {props.loading ? 'Loading...' : props.children}
      </option>
      {!!props.list &&
        props.list.map((i) => (
          <option
            className={clsx('pb-10')}
            style={{
              color: colorcoltrast(cbc),
            }}
          >
            {i.name}
          </option>
        ))}
    </select>
  );
};
export default Dropdown;
