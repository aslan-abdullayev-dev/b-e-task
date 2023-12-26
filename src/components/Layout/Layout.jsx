import "./Layout.scss";

import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="layout-left">
        <Sidebar />
      </div>
      <div className="layout-right">
        <div className="layout-navbar">
          <Navbar />
        </div>
        <div className="layout-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
