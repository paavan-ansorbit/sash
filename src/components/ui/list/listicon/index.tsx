import clsx from 'clsx';
import Icon from '../../icon';
import Contrast from '../../contrast';

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};

export interface IListicon {
  bgcolor?: string;
  icon?: string;
  iconposition?: boolean;
  className: string;
  style: React.CSSProperties;
}
const Listicon: React.FC<IListicon> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }

  return (
    <>
      {props.icon && (
        <Icon
          icon={props.icon}
          className={props.className}
          style={props.style}
        />
      )}
    </>
  );
};

export default Listicon;
