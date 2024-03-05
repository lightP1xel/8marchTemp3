import React from "react";
import II from "../../assets/II.mp4";
import style from "./style.module.css";

export const VideoII = () => {
  return (
    <div className={style.wrapper}>
      <video src={II} controls className={style.videoWrapper}></video>;
    </div>
  );
};
