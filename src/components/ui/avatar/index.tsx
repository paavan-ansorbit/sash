import React from 'react';
import './avatar.css';

export interface IAvatarProps {
  bordercolor?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  outline?: boolean;
  size?: 'small' | 'normal' | 'large';
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
          outline: props.outline ? 'dashed' : ''
        }}
        src="https://i.pravatar.cc/200"
        alt="hello world"
      />
    </div>
  );
};

export default Avatar;
