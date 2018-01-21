import React from "react";

const SideBar = props => {
  const sidebarItems = props.items.map(item => (
    <div
      onClick={() => props.changeView(item.view)}
      key={item.view}
      className={
        "sidebar-item " + (props.activeView === item.view ? "active-item" : "")
      }
    >
      <span className={"fa " + item.icon} />
    </div>
  ));
  return (
    <div className="sidebar">
      <div className="scrollable">{sidebarItems}</div>
    </div>
  );
};

export default SideBar;
