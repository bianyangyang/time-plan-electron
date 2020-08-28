import React from "react";

function Iconfont(props) {
  const { type } = props;
  return <span className={`iconfont ${type}`}></span>;
}

export default Iconfont;
