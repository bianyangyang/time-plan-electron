import React from "react";
import Calendar from "./Calendar";
import TitleRight from "../TitleRight";
import "./index.less";

function PageContent() {
  return (
    <div className="pageContent">
      <TitleRight />
      <div className="content">
        <Calendar />
      </div>
    </div>
  );
}

export default PageContent;
