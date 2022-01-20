import clsx from 'clsx';
import React from 'react';
import Icon from '../icon';
import Contrast from '../../../components/ui/contrast';
export interface IAvatarProps {
  avatar: string;
  bgcolor?: string;
  bordercolor?: string;
  rounded?: boolean;
  outline?: boolean;
  size?: 'small' | 'normal' | 'large';
  iconcolor?: string;
  hideicon?: boolean;
  icon?: string;
  shadow?: boolean;
  iconDirection: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
function getIconDirection(iconDirection: string | undefined,round:number) {
  switch (iconDirection) {
    case 'top-left':
      return `-top-${round} -left-${round}`;
    case 'top-right':
      return `-top-${round} -right-${round}`;
    case 'bottom-left':
      return `-bottom-${round} -left-${round}`;
    case 'bottom-right':
      return `-bottom-${round} -right-${round}`;
  }
}

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};
const Avatar: React.FC<IAvatarProps> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  return (
    <div className={clsx('relative inline-block')}>
      <img
        className={clsx(
          props.rounded ? 'rounded-full' : 'rounded-md',
          props.size === 'small' ? 'w-14' : 'w-20',
          props.size === 'small' ? 'h-14' : 'h-20',
          props.shadow ? 'shadow-xl' : 'shadow-none',
          props.outline ? 'border-2' : 'border-0'
        )}
        style={{
          borderColor: props.bordercolor,
        }}
        src={props.avatar}
        alt="hello world"
      />

      {props.icon && (
        <Icon
          icon={props.icon}
          className={clsx(
            props.size === 'small' ? 'h-5' : 'h-7',
            props.size === 'small' ? 'w-5' : 'w-7',
            props.size === 'small' ? 'p-1' : 'p-2',
            'fill-current inline-block z-50 rounded-full absolute',
            getIconDirection(props.iconDirection,props.rounded?1:2),
            // 'bg-violet-400',

            props.hideicon ?'hidden':  'inline-block'
          )}
          style={{
            color: colorcoltrast(cbc),
            backgroundColor: props.bgcolor,
          }}
        />
      )}
    </div>
  );
};

export default Avatar;
