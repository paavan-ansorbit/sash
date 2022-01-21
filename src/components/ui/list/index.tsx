import React from 'react';
import clsx from 'clsx';
import Contrast from '../contrast';
import Icon from '../icon';

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};
export interface IList {
  bgcolor?: string;
  rounded?: boolean;
  disable?: boolean;
  icon?: string;
  outline?: boolean;
  hideicon?: boolean;
  size?: 'small' | 'normal' | 'large';
  shadow?: boolean;
  opacity?: number;
  iconcolor?: string;
  bordercolor?: string;
  buttonposition?: boolean;
  loading?: boolean;
  liststyle?: boolean;
  bottomgap?: number;
  array?: { name: string }[];
  ennumber?: boolean;
}

const List: React.FC<IList> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  return (
    <ul
      className={clsx(
        'flex  flex-col overflow-hidden',
        props.liststyle ? 'list-decimal' : ''
        // props.outline ? 'border-2' : 'border-0'
        // props.rounded ? 'rounded-full' : 'rounded-md',
      )}
      style={{ gap: props.bottomgap, borderColor: props.bordercolor }}
    >
      {console.log(props.array)}
      {!!props.array &&
        props.array.map((i) => (
          <div
            className={clsx(
              'border hover:opacity-70 flex items-center',
              props.size === 'small' ? 'px-5' : 'px-10',
              props.size === 'small' ? 'py-1' : 'py-2',
              props.shadow ? 'shadow-xl' : 'shadow-none',
              props.disable ? 'cursor-not-allowed' : '',
              props.disable ? 'opacity-50' : '',
              props.buttonposition
                ? 'flex-row'
                : 'flex-row-reverse justify-between',
              `opacity-${props.opacity}`
            )}
            style={{
              backgroundColor: props.bgcolor,
              color: colorcoltrast(cbc),
              borderColor: props.bordercolor,
            }}
          >
            {props.ennumber
              ? props.icon && (
                  <div
                    className={clsx(
                      // 'bg-violet-400',
                      'rounded-full',
                      props.buttonposition ? 'mr-2' : 'ml-2',
                      props.hideicon ? 'hidden' : 'inline-block'
                    )}
                    style={{
                      backgroundColor: colorcoltrast(cbc),
                      color: props.bgcolor,
                    }}
                  >
                    14
                  </div>
                )
              : props.icon && (
                  <Icon
                    icon={props.icon}
                    className={clsx(
                      'h-4',
                      'w-4',
                      props.buttonposition ? 'mr-2' : 'ml-2',
                      'fill-current',
                      props.hideicon ? 'hidden' : 'inline-block'
                    )}
                    style={{ color: props.iconcolor }}
                  />
                )}
            <li>{i.name}</li>
          </div>
        ))}
    </ul>
  );
};

export default List;
