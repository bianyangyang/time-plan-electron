import React from "react";

function Calendar(props) {
  const { cartoon } = props;
  console.log(cartoon);
  return (
    <div className={`monthItemContainer animate__animated ${cartoon}`}>
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
  );
}
export default Calendar;
