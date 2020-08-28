import React from "react";

import TabList from "./component/TabList";
import PageContent from "./component/PageContent";

import "./App.less";

function App() {
  return (
    <div className="App">
      <div className="leftTab">
        <TabList />
      </div>
      <div className="rightContent">
        <PageContent />
      </div>
    </div>
  );
}

export default App;
