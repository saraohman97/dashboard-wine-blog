"use client";

import { useCallback, useState } from "react";
import { Modal } from "./modal";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useAddWineModal from "@/hooks/useAddWineModal";

const AddWineModal = () => {
  const addWineModal = useAddWineModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`/api/register`, data)
      .then(() => {
        addWineModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div>Hello world</div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={addWineModal.isOpen}
      title="Add wine"
      actionLabel="Submit"
      onClose={addWineModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default AddWineModal;
