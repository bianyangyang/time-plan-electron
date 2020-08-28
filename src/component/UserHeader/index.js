import React from "react";
import IconFont from "../Iconfont";

import "./index.less";

function UserHeader() {
  return (
    <div className="userHeader">
      <div className="headerImg"></div>
      <span className="userName">罗志祥</span>
      <div className="options">
        <div className="optionItem">
          <IconFont type="icon-shuaxin" />
        </div>
        <div className="optionItem">
          <IconFont type="icon-lingdang" />
        </div>
        <div className="optionItem">
          <IconFont type="icon-sousuo" />
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
