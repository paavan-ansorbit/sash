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
} from '../../../icons';

interface IconProps {
  className: string;
  style: React.CSSProperties;
  icon: string;
}

const Icon = ({icon,className ,style}: IconProps): React.ReactElement => {
  const iconelement = (icon: string) => {
    if (icon === 'Calendar') {
      return <Calendar />;
    } else if (icon === 'Upload') {
      return <Upload />;
    } else if (icon === 'Link') {
      return <Link />;
    } else if (icon === 'Comment') {
      return <Comment />;
    } else if (icon === 'Download') {
      return <Download />;
    } else if (icon === 'Like') {
      return <Like />;
    } else if (icon === 'Right') {
      return <Right />;
    } else if (icon === 'Plus') {
      return <Plus />;
    } else if (icon === 'Pointer') {
      return <Pointer />;
    }
  };
  return <div className={className} style={style}>{iconelement(icon)}</div>;
};

export default Icon;
