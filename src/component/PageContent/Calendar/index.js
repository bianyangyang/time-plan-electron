import React from "react";
import "./index.less";
import IconFont from "../../Iconfont";

function Calendar() {
  return (
    <div className="calendar">
      <div className="calendarController">
        <span>2018年12月</span>
        <div></div>
        <div className="controlBtn">
          <div className="controlBtnLeft">
            <IconFont type="icon-zuo" />
          </div>
          <div className="controlBtnMiddle">今天</div>
          <div className="controlBtnRight">
            <IconFont type="icon-zuo" />
          </div>
        </div>
      </div>

      <div className="monthContainer">
        <div className="monthWeek">
          <div className="monthWeekItem">周日</div>
          <div className="monthWeekItem">周一</div>
          <div className="monthWeekItem">周二</div>
          <div className="monthWeekItem">周三</div>
          <div className="monthWeekItem">周四</div>
          <div className="monthWeekItem">周五</div>
          <div className="monthWeekItem">周六</div>
        </div>
        <div className="monthContent">
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
          <div className="monthItem">1</div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
