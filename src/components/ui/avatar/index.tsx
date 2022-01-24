import clsx from 'clsx';
import React from 'react';
import Icon from '../icon';
import Contrast from '../../../components/ui/contrast';
export interface IAvatarProps {
  avatar: string;
  bgcolor?: string;
  rounded?: boolean;
  size?: 'small' | 'normal' | 'large';
  iconcolor?: string;
  icon?: string;
  shadow?: boolean;
  iconDirection: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
function getIconDirection(iconDirection: string | undefined) {

  switch (iconDirection) {
    case 'top-left':
      return `-top-1 -left-1`;
    case 'top-right':
      return `-top-1 -right-1`;
    case 'bottom-left':
      return `-bottom-1 -left-1`;
    case 'bottom-right':
      return `-bottom-1 -right-1`;
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
          props.shadow ? 'shadow-xl' : 'shadow-none'
        )}
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
            'fill-current inline-block  z-50 rounded-full absolute',
            getIconDirection(props.iconDirection),
            // 'bg-violet-400',

            // props.hideicon ?'hidden':  'inline-block'
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
