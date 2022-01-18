import React from 'react';

export interface ITags {
  color?: 'primary' | 'secondary' | 'gray';
  rounded?: boolean;
  outline?: boolean;
  pointer?: boolean;
  size?: 'small' | 'normal' | 'large';
  linkcolor?: boolean;
  lists?: boolean;
}

const Tags: React.FC<ITags> = (props) => {
  return (
    <div
      style={{
        background: props.color === 'secondary' ? 'orange' : 'lightblue',
        borderRadius: props.rounded ? 100 : 2,
        outline: props.outline ? 'dashed' : '',
        width: props.size == 'small' ? 70 : 120,
        height: props.size == 'small' ? 30 : 50,
        cursor: props.pointer ? 'pointer' : '',
        listStyle: props.lists ? 'none' : 'order',
        textAlign: 'center',
        
        // listStyle:'none'
        // backgroundColor:props.disable? 'gray':''
      }}
    >
      hello
    </div>
  );
};

export default Tags;
