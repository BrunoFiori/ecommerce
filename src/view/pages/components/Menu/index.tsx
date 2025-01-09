import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useState } from "react";
import MenuItem from "../../../components/MenuItem";

const Menu = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number>(4);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      setVisible(false);
    } else if (touchEndX - touchStartX > 50) {
      setVisible(true);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const navItems = [{ id: 4, icon: "home", name: "Manage Storages", to: "/" }];

  const handleItemClick = (id: number) => {
    setSelectedItemId(id);
  };

  return (
    <>
      <aside
        className={`${visible ? "w-72" : "w-15"} duration-300 h-screen bg-azulPrimario-2 absolute z-50`}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
      >
        <div className="flex flex-col h-full justify-between ">
          <div className="flex flex-col ">
            {navItems.map((item) => (
              <MenuItem
                key={`sidebaritem-${item.id}`}
                {...item}
                visibelText={visible}
                onClick={() => handleItemClick(item.id)}
                selected={selectedItemId === item.id}
                className="text-white text-responsive font-medium truncate"
              />
            ))}
          </div>
          <MenuItem
            id={1}
            icon="login"
            name="Entrar"
            to="login"
            visibelText={visible}
            onClick={() => handleItemClick(7)}
            selected={selectedItemId === 1}
            className="text-white text-responsive font-medium truncate"
          />
        </div>
        <KeyboardArrowLeftIcon
          className={`${!visible && "rotate-180"} bg-white cursor-pointer -ml-3 left-full top-9 azulPrimario-0 rounded-full absolute border-2 border-azulPrimario-2 `}
          onClick={() => setVisible(!visible)}
        />
      </aside>
    </>
  );
};

export default Menu;
