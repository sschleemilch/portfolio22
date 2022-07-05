import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

// sidebar content
const sidebarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "human", itemName: "About", itemRoute: "#about", activeClass: "" },
  {
    icon: "service",
    itemName: "Service",
    itemRoute: "#service",
    activeClass: "",
  },
  {
    icon: "technologies",
    itemName: "Technologies",
    itemRoute: "#technologies",
    activeClass: "",
  },
  {
    icon: "statements",
    itemName: "Statements",
    itemRoute: "#statements",
    activeClass: "",
  },
  { icon: "blog", itemName: "Blog", itemRoute: "#blog", activeClass: "" },
  {
    icon: "contact",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: "img/about/avatar.jpg",
  firstname: "Sebastian",
  lastname: "Schleemilch"
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div
        className={click ? "sidebar menu-open" : "sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link to="/">
              <img
                src="img/logo/logo.png"
                alt="S"
              />
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "technologies",
                "testimonial",
                "blog",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + sidebarFooterContent.avatar
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.firstname}</h3>
                <h3>{sidebarFooterContent.lastname}</h3>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
