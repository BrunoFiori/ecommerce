import React from 'react';
import MenuItem from '../../../components/MenuItem';
import Popper from '../../../components/Popper';

interface MenuPopperProps {
  id: string | undefined;
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClickAway: () => void;
  navItems: { id: number; icon: string; name: string; to: string }[];
  handleItemClick: (id: number) => void;
  selectedItemId: number;
}

const MenuPopper: React.FC<MenuPopperProps> = ({ id, open, anchorEl, handleClickAway, navItems, handleItemClick, selectedItemId }) => {
  return (
    <Popper id={id} open={open} anchorEl={anchorEl} handleClickAway={handleClickAway}>
      {navItems.map(item => (
        <MenuItem
          key={`sidebaritem-small-${item.id}`}
          {...item}
          visibelText={true}
          onClick={() => handleItemClick(item.id)}
          selected={selectedItemId === item.id}
          className="text-gray-700 text-sm"
        />
      ))}
    </Popper>
  );
};

export default MenuPopper;
