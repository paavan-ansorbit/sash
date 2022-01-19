import { hover } from '@testing-library/user-event/dist/hover';
import clsx from 'clsx';
import Calendar from '../../../icons/calendar';
import Pointer from '../../../icons/pointer';
import Icon from '../icon';
import Contrast from '../../../components/ui/contrast';
import { Disabled } from '../../../stories/MyButton.stories';

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};

export interface IButtonProps {
  bgcolor?: string;
  rounded?: boolean;
  disable?: boolean;
  icon?: string;
  outline?: boolean;
  hideicon?: boolean;
  size?: 'small' | 'normal' | 'large';
  shadow?: boolean;
  opacity?: number;
  textcolor?: string;
  iconcolor?: string;
  bordercolor?: string;
}
const Button: React.FC<IButtonProps> = (props) => {
  
  let cbc =0 ;
  
  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  // console.log(props.bgcolor && Contrast(props.bgcolor));
  // console.log(colorcoltrast(cbc));

  return (
    <button
      className={clsx(
        'border',
        'flex',
        'flex-1',
        `hover:opacity-70`,
        props.bgcolor === 'secondary'
          ? 'border-orange-400'
          : 'border-yellow-400',
        'justify-between',
        'items-center',
        // `text-${props.textcolor}`,
        // `bg-${props.color}`,
        // props.color === 'secondary' ? 'bg-orange-400' : 'bg-yellow-400',
        props.rounded ? 'rounded-full' : 'rounded-md',
        props.size === 'small' ? 'px-3' : 'px-4',
        props.size === 'small' ? 'py-1' : 'py-2',
        props.shadow ? 'shadow-xl' : 'shadow-none',
        props.outline ? 'border-2' : 'border-0',
        'pointer-events-auto',
        props.disable ? 'cursor-not-allowed' : '',
        props.disable ? 'opacity-50' : '',
        `opacity-${props.opacity}`,
      )}
      style={{
        color: colorcoltrast(cbc),
        backgroundColor: props.bgcolor,
        borderColor: props.bordercolor,
      }}

    >
      {props.icon && (
        <Icon
          icon={props.icon}
          className={clsx(
            'h-4',
            'w-4',
            'mr-2',
            'fill-current',
            props.hideicon ? 'hidden' : 'inline-block'
          )}
          style={{ color: props.iconcolor }}
        />
      )}
      {props.children}
      {Contrast}
    </button>
  );
};

export default Button;
