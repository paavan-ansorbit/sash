import React, { SVGProps } from 'react';
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
interface IconProps extends SVGProps<SVGSVGElement>{
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

function Icon({ icon, className ,style, ...rest}: IconProps) {
  if (!IconMappping[icon]) return null;

  const IconComponent = IconMappping[icon];

  return (
    <>
      <IconComponent {...rest}  className={className} style={style}/>
    </>
  );
}
export default Icon;
