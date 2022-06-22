import React from "react";
import {
  FaBriefcase
} from "react-icons/fa";

const experienceContent = [
  {
    year: "2022 - present",
    position: "CI & Build Expert",
    compnayName: "BMW AG",
    details: `CI Strategy, Platforms, Efficient development and build`,
  },
  {
    year: "2018 - 2021",
    position: "CI Expert",
    compnayName: "Bosch GmbH",
    details: `Containerization, CI`,
  },
  {
    year: "2016 - 2018",
    position: "Software Integration",
    compnayName: "Bosch GmbH",
    details: `Development workflows, Repository architecture, CI`,
  },
  {
    year: "2014 - 2015",
    position: "Working Student",
    compnayName: "BMW M GmbH",
    details: `OBD`,
  },
  {
    year: "2013",
    position: "Bachelor Thesis",
    compnayName: "Fraunhofer IISB",
    details: `Inductive Vehicle Charging, μC Programming, Power Electronics`,
  },
  {
    year: "2012 - 2013",
    position: "Working Student",
    compnayName: "Fraunhofer IIS",
    details: `Wireless μC Programming in a real time application`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <FaBriefcase/>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
