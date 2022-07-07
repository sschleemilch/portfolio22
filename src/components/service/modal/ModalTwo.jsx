import React from "react";

const ModalTwo = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/build_infrastructure.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Build Infrastructure</h3>
        <p>
          Build infrastructure that scales well is a tough thing to do.
          So this topic involves infrastructure as code to be in control of how your infrastructure looks like.
          This is more on the user side, not so much about hosting services and the infrastructure behind it.
          It involves thinking about reproduceability using containers, distributed and centralized caching strategies
          as well as efficient start up times, clean versus incremental builds and more.
        </p>
      </div>
    </div>
  );
};

export default ModalTwo;
