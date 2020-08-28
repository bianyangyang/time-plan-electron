import React from "react";
import "./index.less";
import IconFont from "../Iconfont";

const ipcRenderer = window.require("electron").ipcRenderer;

function TitleRight() {
  return (
    <div className="titleRight">
      <div className="titleDragComponent"></div>
      <div
        className="titleControlItem"
        onClick={() => {
          ipcRenderer.send("window-min");
        }}
      >
        <IconFont type="icon-zuixiaohua" />
      </div>
      <div
        className="titleControlItem"
        onClick={() => {
          ipcRenderer.send("window-full");
        }}
      >
        <IconFont type="icon-zuidahua" />
      </div>
      <div
        className="titleControlItem"
        onClick={() => {
          ipcRenderer.send("window-close");
        }}
      >
        <IconFont type="icon-guanbi" />
      </div>
    </div>
  );
}

export default TitleRight;
