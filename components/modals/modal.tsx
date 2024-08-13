"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  // OPEN
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // CLOSE
  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    // setTimeout(() => {
    //     onClose();
    // }, 300)
    onClose();
  }, [disabled, onClose]);

  // SUBMIT
  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  // SECONDARY ACTION
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{body}</DialogDescription>

        {secondaryAction && secondaryActionLabel && (
          <Button
            variant="outline"
            disabled={disabled}
            onClick={secondaryAction}
          >
            {secondaryActionLabel}
          </Button>
        )}

        <Button disabled={disabled} onClick={handleSubmit}>
          {actionLabel}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
