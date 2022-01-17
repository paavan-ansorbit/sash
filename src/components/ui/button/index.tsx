import './button.css';

import Calendar from '../../../icons/calendar';
import Pointer from '../../../icons/pointer';
import { Disabled } from '../../../stories/MyButton.stories';

export interface IButtonProps {
  color?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  disable?: boolean;
  icon?: String;
  outline?: boolean;
  hideicon?: boolean;
  pointer?: boolean;
  size?: 'small' | 'normal' | 'large';
}
const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className="btn"
      style={{
        background: props.color === 'secondary' ? 'orange' : 'lightblue',
        borderRadius: props.rounded ? 16 : 2,
        outline: props.outline ? 'dashed' : 'double',
        width: props.size == 'small' ? 70 : 120,
        height: props.size == 'small' ? 30 : 50,
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
              display: props.hideicon ? 'hidden' : 'inline-block',
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
