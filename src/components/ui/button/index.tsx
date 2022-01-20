
import clsx from 'clsx';
import Icon from '../icon';
import Contrast from '../../../components/ui/contrast';

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
  buttonposition?: boolean;
  loading?: boolean
}
const Button: React.FC<IButtonProps> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  // console.log(props.bgcolor && Contrast(props.bgcolor));
  // console.log(colorcoltrast(cbc));

  return (
    <button
      className={clsx(
        'border flex flex-1 hover:opacity-70 justify-between items-center pointer-events-auto',
        props.bgcolor === 'secondary'
          ? 'border-orange-400'
          : 'border-yellow-400',
        props.rounded ? 'rounded-full' : 'rounded-md',
        props.size === 'small' ? 'px-3' : 'px-4',
        props.size === 'small' ? 'py-1' : 'py-2',
        props.shadow ? 'shadow-xl' : 'shadow-none',
        props.outline ? 'border-2' : 'border-0',
        props.disable ? 'cursor-not-allowed' : '',
        props.disable ? 'opacity-50' : '',
        `opacity-${props.opacity}`,
        props.buttonposition ? 'flex-row' : 'flex-row-reverse'
      )}
      style={{
        color: colorcoltrast(cbc),
        backgroundColor: props.bgcolor,
        borderColor: props.bordercolor,
      }}
    >
      {props.loading ? (
        <div
          className="spinner-border animate-spin  inline-block w-4 h-4 mx-2  border-t-2 border-r-2 rounded-full"
          style={{ borderColor: colorcoltrast(cbc) }}
        ></div>
      ) : (
        props.icon && (
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
        )
      )}
      {props.loading ? 'Loading...' : props.children}
    </button>
  );
};

export default Button;
