import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../components/header/Sidebar";
import Hero from "../components/slider/Hero";
import About from "../components/about/About";
import Service from "../components/service/Service";
import Technologies from "../components/technologies/Technologies";
import Statements from "../components/statements/Statements";
import Blog from "../components/blog/Blog";
import Contact from "../components/Contact";
import Map from "../components/Map";
import HeaderMobile from "../components/header/HeaderMobile";

const Main = () => {
  const [isDark, setIsDark] = useState(true);
  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div
      className={`home-light mainpart ${isDark ? "theme-dark" : ""}`}
    >
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Darkmode">
            <FaMoon />
          </i>
          <i className="dark-text" title="Lightmode">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>

      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="services" id="service">
        <div className="container">
          <div className="title">
            <h3>What I Do</h3>
            <p>
              What I am tinkering with on a daily basis
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="technologies" id="technologies">
        <div className="container">
          <div className="title">
            <h3>Technologies</h3>
            <p>
              A incomplete list of technologies I am working with in depth.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Technologies />
        </div>
      </div>
      {/* End Portfolio */}

      <div className="statements" id="statements">
        <div className="container">
          <div className="title">
            <h3>Statements</h3>
            <p>
              Short statements about facts and antipatterns that occured to me over the years.
            </p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              <Statements />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="news" id="blog">
        <div className="container">
          <div className="title">
            <h3>Blog</h3>
            <p>
              Things I wanted to write down and might be helpful for others fighting with similar problems.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="contact" id="contact">
        <div className="container">
          <div className="title">
            <h3>Contact</h3>
            <p>
              Feel free to contact me in case of professional interest, offers or just to have a chat.
            </p>
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I'm always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default Main;
