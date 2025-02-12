import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";

const EditModal = ({ id }: { id: string }) => {
  console.log(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="flex items-center gap-1 px-3 bg-transparent border-[#fee5b5] border h-8 text-sm text-[#fee5b5] rounded hover:opacity-80 transition-opacity hover:bg-transparent"
      >
        <Edit size={16} />
        Edit
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default EditModal;
