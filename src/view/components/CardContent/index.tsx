import React from 'react';

const CardContent: React.FC<{ children: React.ReactNode; doubleClick?: () => void; touchEnd?: () => void }> = ({ children, doubleClick, touchEnd }) => {
  return (
    <div className="card-content" onDoubleClick={doubleClick} onTouchEnd={touchEnd}>
      {children}
    </div>
  );
};

export default CardContent;
