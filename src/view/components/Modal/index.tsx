import { Dialog } from "@mui/material";
import { FC, ReactNode } from "react";
import Icon from "../Icon";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={`${className}`}
      fullWidth
    >
      {onClose && (
        <div className={`w-full flex justify-end absolute -left-8 top-8`}>
          <Icon icon={"close"} onClick={onClose} />
        </div>
      )}
      <div className={`p-[24px] pt-[40px]`}>{children}</div>
    </Dialog>
  );
};

export default Modal;
