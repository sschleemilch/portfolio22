import React from "react";
import {
  FaGraduationCap
} from "react-icons/fa";

const educationContent = [
  {
    year: "2016",
    degree: "Automotive Software Engineering (M.Sc.)",
    institute: "Technische Universität München",
  },
  {
    year: "2013",
    degree: "Mechatronics (B.Sc.)",
    institute: "Friedrich Alexander Universität",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div class="icon">
            <FaGraduationCap/>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default Education;
