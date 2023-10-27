import React from "react";
import react from "../images/react.png";

const Header = () => {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={react} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 m-2 text-white-50">Contact</span>
    </div>
  );
};

export default Header;
