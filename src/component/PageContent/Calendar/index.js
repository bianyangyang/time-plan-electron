import React, { useState } from "react";
import "./index.less";
import "animate.css/animate.min.css";
import IconFont from "../../Iconfont";
import MonthContainer from "./MonthContainer";

function Calendar() {
  const [inMethod, setInMethod] = useState("");
  const changeMonth = (type) => {
    if (type === "left") {
      setInMethod("animate__slideInRight");
    } else {
      setInMethod("animate__slideInLeft");
    }
    setTimeout(() => {
      setInMethod("");
    }, 500);
  };
  return (
    <div className="calendar">
      <div className="calendarController">
        <span>2018年12月</span>
        <div></div>
        <div className="controlBtn">
          <div
            className="controlBtnLeft"
            onClick={() => {
              changeMonth("left");
            }}
          >
            <IconFont type="icon-zuo" />
          </div>
          <div className="controlBtnMiddle">今天</div>
          <div
            className="controlBtnRight"
            onClick={() => {
              changeMonth("right");
            }}
          >
            <IconFont type="icon-zuo" />
          </div>
        </div>
      </div>

      <div className="monthContainer">
        <MonthContainer style={{ display: "none" }} cartoon={inMethod} />
        <MonthContainer />
      </div>
    </div>
  );
}

export default Calendar;
