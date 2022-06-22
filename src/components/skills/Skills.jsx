import React from "react";

const skillsContent = [
  {
    name: "Python",
    skillPercent: "95",
  },
  {
    name: "Groovy",
    skillPercent: "80",
  },
  {
    name: "Java",
    skillPercent: "65",
  },
  {
    name: "C/C++",
    skillPercent: "75",
  },
  {
    name: "Bash",
    skillPercent: "80",
  },
  {
    name: "Batch",
    skillPercent: "80",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
