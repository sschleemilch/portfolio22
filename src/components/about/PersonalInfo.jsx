import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sebastian " },
  { meta: "last name", metaInfo: "Schleemilch" },
  { meta: "Age", metaInfo: "32" },
  { meta: "Nationality", metaInfo: "German" },
  { meta: "Address", metaInfo: "Munich" },
  { meta: "phone", metaInfo: "+4917655553629" },
  { meta: "langages", metaInfo: "German, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
