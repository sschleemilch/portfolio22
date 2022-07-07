import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/continuous_integration.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Large Scale Continuous Integration</h3>
        <p>
          Modern Software Development is complex since code bases getting larger and larger.
          For large projects like in the Autonomous Software Development that also means a lot of Developers.
          I am taking up the challenge to think about concepts how to develop code together efficiently.
          That includes:
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>How does the source code development workflow look like? How long should the branches ideally live?</p>
            </li>
            <li>
              <p>How do we do releases? Where do we branch off? How do we bring back bugfixes?</p>
            </li>
            <li>
              <p>What should be tested when creating Pull-Requests?</p>
            </li>
          </ul>
        </div>
        <h3>Optimizing the whole workflow</h3>
        <p>
          No matter what kind of repository strategy one is going with (Multi vs Monorepo), 
          you want to optimize wherever you can. That includes testing the right things based on the
          changeset that has been introduced. Starting with simple file type filters going into
          querying the build system what kind of build targets need to be built and tested 
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
