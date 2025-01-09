import { Icon as MuiIcon } from '@mui/material';
import React from 'react';

interface IconeProps {
  popupTitle?: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onDoubleClick?: (event: React.MouseEvent | React.TouchEvent) => void;
  fontSize?: 'inherit' | 'medium' | 'small' | 'large';
  secundary?: boolean;
}

const Icon = ({ icon, className, onClick, style, fontSize = 'medium', popupTitle, secundary = false }: IconeProps) => {
  return (
    <MuiIcon
      fontSize={fontSize}
      className={`cursor-pointer text-azulPrimario-2 bg-white rounded-md ${className} ${secundary && 'text-red-500 hover:text-red-700'}`}
      onClick={onClick}
      style={style}
      title={popupTitle}
    >
      {icon}
    </MuiIcon>
  );
};

export default Icon;
