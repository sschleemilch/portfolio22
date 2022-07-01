import React from "react";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src="img/logo/logo.png" alt="S" />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
