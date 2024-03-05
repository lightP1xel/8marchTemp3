import React from "react";
import style from "./style.module.css";
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import fouth from "../../assets/4.jpg";

export const SecondBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.textwrapper}>
          <p>Вы - источник силы, уверенности и вдохновения для нас всех.</p>
          <p>
            Ваша неповторимая энергия и теплота делают наш мир лучше и ярче.
          </p>
        </div>
        <div className={style.blockWrapper}>
          <img className={style.block} src={first} />
          <img className={style.block} src={second} />
          <img className={style.block} src={third} />
          <img className={style.block} src={fouth} />
        </div>
      </div>
    </div>
  );
};
