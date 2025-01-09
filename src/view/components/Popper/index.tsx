import { ClickAwayListener, Popper as MuiPopper, Paper } from "@mui/material";
import React from "react";

interface PopperProps {
  id: string | undefined;
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClickAway: () => void;
  children: React.ReactNode;
}

const Popper: React.FC<PopperProps> = ({
  id,
  open,
  anchorEl,
  handleClickAway,
  children,
}) => {
  return (
    <MuiPopper
      id={id}
      open={open}
      anchorEl={anchorEl}
      placement="top"
      className="z-[9999]"
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Paper className="w-full bg-white shadow-lg rounded-lg py-8">
          {children}
        </Paper>
      </ClickAwayListener>
    </MuiPopper>
  );
};

export default Popper;
