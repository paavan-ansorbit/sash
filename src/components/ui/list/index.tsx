import React from 'react';
import clsx from 'clsx';
import Contrast from '../contrast';
import Icon from '../icon';
import ListItemButton from './listiconbutton';
import Dropdown from '../dropdown';

const colorcoltrast = (lum: number): string => {
  if (lum > 0.5) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};
export interface IList {
  bgcolor?: string;
  icon?: string;
  size?: 'small' | 'normal' | 'large';
  iconposition?: boolean;
  liststyle?: boolean;
  bottomgap?: number;
  array?: { name: string }[];
  ennumber?: boolean;
}

const List: React.FC<IList> = (props) => {
  let cbc = 0;

  if (props.bgcolor) {
    cbc = Contrast(props.bgcolor);
  }
  return (
    <ul
      className={clsx(
        'flex  flex-col overflow-hidden',
        props.liststyle ? 'list-decimal' : ''
      )}
      style={{ gap: props.bottomgap }}
    >
      <ListItemButton
        icon="Calendar"
        iconposition={props.iconposition}
        bgcolor={props.bgcolor}
      >
        Home
      </ListItemButton>
      <ListItemButton
        icon="Like"
        iconposition={props.iconposition}
        bgcolor={props.bgcolor}
      >
        About
      </ListItemButton>
      <ListItemButton
        icon="Link"
        iconposition={props.iconposition}
        bgcolor={props.bgcolor}
      >
        Help
      </ListItemButton>
      <Dropdown />
    </ul>
  );
};

export default List;
