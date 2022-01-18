import React from 'react';
import './pagination.css'
// import clsx from 'clsx';

export interface IPagination {
  color?: 'primary' | 'secondary' | 'gray';
  list?: {number:number}[];
  rounded?: boolean;
  outline?: boolean;
  pointer?: boolean;
  size?: 'small' | 'normal' | 'large';
  linkcolor?: boolean;
}


const Pagination: React.FC<IPagination> = (props) => {

//   const mouseover = () => {
//     props.linkcolor===true
// }
  return (
    <div
      style={{
        background: props.color === 'secondary' ? 'orange' : 'lightblue',
        borderRadius: props.rounded ? 100 : 2,
        outline: props.outline ? 'dashed' : 'double',
        width: props.size == 'small' ? 300 : 420,
        height: props.size == 'small' ? 30 : 50,
        cursor: props.pointer ? 'pointer' : '',
        // backgroundColor:props.disable? 'gray':'',
        display: 'flex',
        padding:3
      }}
    >
      {console.log(props.list)}
      {!!props.list &&
        props.list.map((i) => (
          <a
            style={{
              background: props.linkcolor ? 'red' : 'green',
              margin: 3,
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textDecoration: 'none',
              borderRadius: props.rounded ? 100 : 2,
              outline: props.outline ? 'dashed' : 'double',
              cursor: props.pointer ? 'pointer' : '',
            }}
            href="#"
            // className={clsx(props.)}
            // onMouseOver={mouseover}
          >
            {i.number}
          </a>
        ))}
    </div>
  );
};
export default Pagination;
