import React from 'react';
import './avatar.css';

export interface IAvatarProps {
  bordercolor?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  outline?: boolean;
  size?: 'small' | 'normal' | 'large';

  shadow?: boolean;
}

const Avatar: React.FC<IAvatarProps> = (props) => {
  return (
    <div>
      <img
        className="avatardiv"
        style={{
          borderColor:
            props.bordercolor === 'secondary' ? 'orange' : 'lightblue',
          borderRadius: props.rounded ? 100 : 20,
          width: props.size == 'small' ? 100 : 200,
          height: props.size == 'small' ? 100 : 200,

          boxShadow: props.shadow
            ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            : 'none',
          outline: props.outline ? 'dashed' : '',
        }}
        src="https://i.pravatar.cc/200"
        alt="hello world"
      />
    </div>
  );
};

export default Avatar;
