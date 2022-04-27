import React, { useContext, useEffect } from "react";
import style from "../css/Progress.module.css";

const Progress = ({ DataToRender }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          padding: "20px",
          color: "#000c64",
          overflowWrap: "break-word",
          overflowY: "scroll",
          maxHeight: "70vh",
        }}
      >
        {DataToRender.map((unit, index) => {
          return (
            <div key={index} className={style.mainOfProgress}>
              <div className={style.oneLine}>
                <span>x : </span>
                <span>{unit.x}</span>
              </div>
              <div className={style.oneLine}>
                <span>y : </span>
                <span>{unit.y}</span>
              </div>
              <div className={style.oneLine}>
                <span>time : </span>
                <span>{unit.time}</span>
              </div>
              <div className={style.oneLine}>
                <span>label : </span>
                <span>{unit.label}</span>
              </div>
              <div className={style.oneLine}>
                <span>url : </span>
                <span>{unit.url}</span>
              </div>
              <div className={style.oneLine}>
                <span>Icon : </span>
                <span>
                  <img src={unit.Icon} width="50px" alt="preview" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Progress;
