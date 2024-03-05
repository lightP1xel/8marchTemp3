import React, { useState } from "react";
import { Button, Modal } from "antd";
// import flowers from "../../assets/flowers.png";
import style from "./style.module.css";
import { congratulations } from "./congratulations.js";

export const ModalWin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState();

  const showModal = () => {
    const randomGreet =
      congratulations[Math.floor(Math.random() * congratulations.length)];
    setData(randomGreet);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.container}>
      <Button className={style.button} onClick={showModal}>
        нажать здесь
      </Button>

      <Modal
        title="Поздравляем Вас с 8 Марта"
        className={style.modalWrapper}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className={style.floweContainer}>
          <div className={style.flower}>
            <div className={style.message}></div>
          </div>
          <p className={style.messageText}>{data}</p>
        </div>
        {/* {data} */}
      </Modal>
    </div>
  );
};
