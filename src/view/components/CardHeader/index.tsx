import React from 'react';

const CardHeader: React.FC<{ children: React.ReactNode; doubleClick?: () => void; touchEnd?: () => void; touchMove?: () => void }> = ({
  children,
  doubleClick,
  touchEnd,
  touchMove,
}) => {
  return (
    <div className="w-full" onDoubleClick={doubleClick} onTouchEnd={touchEnd} onTouchMove={touchMove}>
      {children}
    </div>
  );
};

export default CardHeader;
