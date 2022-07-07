import React from "react";

const ModalThree = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/3.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Efficient Development Environment</h3>
        <p>
          With more and more complex products it is important to have your tools under control.
          When working on more than one product or repository it is importing to sandbox those environments
          and make it easy and lightweight to switch from one to another, having always the right tools and their versions at hand
          when starting to develop a new feature.
          So I am looking into technologies like Container based Development Environments to prepare a well defined environment
          including all the tools in their right version on every branch and repository you check out.
        </p>
        <p>
          This way you are very close if not in the same environment the Continuous Integration environment uses to build the product,
          which will eliminate a lot of "works on my machine" effects. This tremendously reduces debugging and helps to build better products.
          It also reduces the startup time for new developers and saves time for everyone taking care about configuring their environments.
        </p>
      </div>
    </div>
  );
};

export default ModalThree;
