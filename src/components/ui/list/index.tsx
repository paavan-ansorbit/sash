import React from 'react';

export interface IList {
  color?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  outline?: boolean;
  pointer?: boolean;
  size?: 'small' | 'normal' | 'large';
  linkcolor?: boolean;
  array?: { name: string; }[];
  lists?: boolean;
}

const List: React.FC<IList> = (props) => {
  return (
    <ul
      style={{
        background: props.color === 'secondary' ? 'orange' : 'lightblue',
        borderRadius: props.rounded ? 100 : 2,
        outline: props.outline ? 'dashed' : 'double',
        // width: props.size == 'small' ? 70 : 120,
        // height: props.size == 'small' ? 30 : 50,
        cursor: props.pointer ? 'pointer' : '',
        listStyle: props.lists ? 'none' : 'order',
        // listStyle:'none'
        // backgroundColor:props.disable? 'gray':''
      }}
    >
      {console.log(props.array)}
      {!!props.array &&
        props.array.map((i) => (
          <li
            style={{
              backgroundColor: props.color === 'primary' ? 'red' : 'green',
            }}
          >
            {i.name}
          </li>
        ))}
      <li>hdsgfk</li>
      <li>hdsgfk</li>
      <li>hdsgfk</li>
    </ul>
  );
};

export default List;
