import { useParams } from "react-router-dom";
import { Result } from "antd";
import React from "react";

import Logo from "../../assets/svg/be_logo.svg?react";

function Main() {
  let { pageSlug } = useParams();

  return (
    <div
      className="main"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Result icon={<Logo />} title={`${pageSlug.toUpperCase()}`} />
    </div>
  );
}

export default Main;
