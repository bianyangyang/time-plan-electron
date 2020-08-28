import React from "react";

import Title from "../Title";
import UserHeader from "../UserHeader";
import IconFont from "../Iconfont";

import "./index.less";

function TabList() {
  return (
    <div className="tabList">
      <Title />
      <UserHeader />
      <div className="listItem">
        <IconFont type="icon-dangriguahao" />
        <span className="listItemName">今天</span>
      </div>
      <div className="listItem">
        <IconFont type="icon-benzhou" />
        <span className="listItemName">最近7天</span>
      </div>
      <div className="listItem">
        <IconFont type="icon-rili" />
        <span className="listItemName">日历</span>
      </div>
      <div className="listItem">
        <IconFont type="icon-wodehezi" />
        <span className="listItemName">收集箱</span>
      </div>
      <div className="formAdd">
        <div className="formAddSelect">
          <div className="selectItem select">
            <span>清单</span>
          </div>
          <div className="selectItem">
            <span>标签</span>
          </div>
          <div className="selectItem">
            <span>自定义</span>
          </div>
        </div>
        <div className="listItem">
          <IconFont type="icon-tianjia" />
          <span className="listItemName">添加清单</span>
        </div>
      </div>
      <div className="divide"></div>
      <div className="listItem">
        <IconFont type="icon-yiwancheng" />
        <span className="listItemName">已完成</span>
      </div>
      <div className="listItem">
        <IconFont type="icon-lajitong" />
        <span className="listItemName">垃圾桶</span>
      </div>
      <div className="divide"></div>
      <div className="listItem">
        <IconFont type="icon-wendang" />
        <span className="listItemName">摘要</span>
      </div>
      <div className="divide"></div>
    </div>
  );
}

export default TabList;
