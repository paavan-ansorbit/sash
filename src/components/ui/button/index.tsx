import './button.css';

import Calendar from '../../../icons/calendar';
import Pointer from '../../../icons/pointer';
import { Disabled } from '../../../stories/MyButton.stories';

export interface IButtonProps {
  color?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  disable?: boolean;
  icon?: 'Calendar' | 'Pointer';
  outline?: boolean;
  hideicon?: boolean;
  pointer?: boolean;
  size?: 'small' | 'normal' | 'large';
  shadow?: boolean;
}
const buttonsize = (size: string | undefined) => {
  if (size === 'small') {
    return 10;
  } else if (size === 'normal') {
    return 30;
  } else {
    return 50;
  }
};
const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className="btn"
      style={{
        background: props.color === 'secondary' ? 'orange' : 'lightblue',
        borderRadius: props.rounded ? 16 : 2,
        outline: props.outline ? 'dashed' : 'double',
        padding: buttonsize(props.size),
        // padding: props.size == 'small' ? 70 : 120,
        // height: props.size == 'small' ? 30 : 50,
        boxShadow: props.shadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : 'none',
        cursor: props.pointer ? 'pointer' : '',
        // backgroundColor:props.disable? 'gray':''
      }}
      {...(props.disable ? 'disabled' : '')}
    >
      {props.icon == 'Calendar' ? (
        <Calendar
          style={{
            width: 15,
            height: 15,
            marginRight: 5,
            display: props.hideicon ? 'none' : 'inline-block',
          }}
        />
      ) : (
        <Pointer
          style={{
            width: 15,
            height: 15,
            marginRight: 5,
            display: props.hideicon ? 'none' : 'inline-block',
          }}
        />
      )}
      {props.children}
    </button>
  );
};

export default Button;
