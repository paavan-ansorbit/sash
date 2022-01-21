import React from 'react';
import {
  Calendar,
  Upload,
  Link,
  Comment,
  Download,
  Like,
  Right,
  Plus,
  Pointer,
  Arrowdown,
} from '../../../icons';
// import * as Icons from '../../../icons';
interface IconProps {
  className: string;
  style: React.CSSProperties;
  icon: string;
}

const IconMappping: { [key: string]: any } = {
  Calendar,
  Upload,
  Link,
  Comment,
  Download,
  Like,
  Right,
  Plus,
  Pointer,
  Arrowdown,
};

function Icon({ icon, className ,style}: IconProps) {
  if (!IconMappping[icon]) return null;

  const IconComponent = IconMappping[icon];

  return (
    <>
      <IconComponent  className={className} style={style}/>
    </>
  );
}
export default Icon;
