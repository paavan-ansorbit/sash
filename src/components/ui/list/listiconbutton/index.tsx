import clsx from 'clsx';
import Icon from '../../icon';
import Contrast from '../../contrast';
import Listicon from '../listicon';
import Listtext from '../listtext';

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};

export interface IListItemButton {
  bgcolor?: string;
  icon?: string;
  iconposition?: boolean;
}
const ListItemButton: React.FC<IListItemButton> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  // console.log(props.bgcolor && Contrast(props.bgcolor));
  // console.log(colorcoltrast(cbc));

  return (
    <li
      className={clsx(
        ' flex flex-1 hover:opacity-70 px-5 py-2 items-center border ',
        {
          'flex-row': props.iconposition,
          'justify-between flex-row-reverse': !props.iconposition,
        }
      )}
      style={{
        color: colorcoltrast(cbc),
        backgroundColor: props.bgcolor,
      }}
    >
      {props.icon && (
        <Listicon
          icon={props.icon}
          className={clsx(
            'h-4 w-4',
            props.iconposition ? 'mr-2' : 'ml-2',
            'fill-current'
          )}
          style={{ color: colorcoltrast(cbc) }}
        />
      )}
      <Listtext children={props.children} />
    </li>
  );
};

export default ListItemButton;
