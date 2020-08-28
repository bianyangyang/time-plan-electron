import React from "react";
import "./index.less";

import IconFont from "../Iconfont";

function TitleRight() {
  return (
    <div className="titleRight">
      <div className="titleDragComponent"></div>
      <div className="titleControlItem">
        <IconFont type="icon-zuixiaohua" />
      </div>
      <div className="titleControlItem">
        <IconFont type="icon-zuidahua" />
      </div>
      <div className="titleControlItem">
        <IconFont type="icon-guanbi" />
      </div>
    </div>
  );
}

export default TitleRight;
