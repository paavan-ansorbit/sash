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
export interface IPagination {
  bgcolor?: string;
  list?: string[];
  rounded?: boolean;
  size?: 'small' | 'normal' | 'large';
  disable?: boolean;
  hidenext: boolean;
  hideprev: boolean;
}

const Pagination: React.FC<IPagination> = (props) => {
  let cbc = 0;

  const getPaginationList = (list:string[], next:boolean, prev:boolean):String[] => {
    if (next ) {
      return list.slice(0,-1)
    } else if (prev) {
      return list.slice(1)
    } else if (next===false && prev===false) {
      return list
    }else {
      return list
    }
  }

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  return (
    <div
      className={clsx(
        ' inline-flex  items-center pointer-events-auto overflow-hidden',
        props.rounded ? 'rounded-full' : 'rounded-md',
        props.disable ? 'cursor-not-allowed' : '',
        props.disable ? 'opacity-50' : ''
      )}
    >
      {!!props.list &&
        getPaginationList(props.list,props.hidenext,props.hideprev).map((i) => (
          <a
            className={clsx(
              'hover:opacity-70 border visited:bg-slate-700',
              props.size === 'small' ? 'px-3' : 'px-4',
              props.size === 'small' ? 'py-1' : 'py-2',
              
              'focus:outline-violet-300 focus:ring focus:ring-violet-300 focus:opacity-20'
            )}
            style={{
              color: colorcoltrast(cbc),
              backgroundColor: props.bgcolor,
            }}
            href='#'
          >
            {i}
          </a>
        ))}
    </div>
  );
};
export default Pagination;
