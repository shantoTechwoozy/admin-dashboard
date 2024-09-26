import cn from "@/utils/cn";
import {
  Button,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalFooter,
} from "keep-react";
import React from "react";

interface PropsTypes {
  children: React.ReactNode;
  modalOver: React.ReactNode;
  className?: string;
}

const KeepModal: React.FC<PropsTypes> = ({
  children,
  modalOver,
  className,
}) => {
  return (
    <Modal>
      <ModalAction asChild>{modalOver}</ModalAction>
      <ModalContent
        className={cn("min-w-[20rem] px-10 py-10 lg:min-w-[26rem]", className)}
      >
        <ModalClose className="absolute right-4 top-4" />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default KeepModal;
