import React from "react";

const educationContent = [
  {
    year: "2016",
    degree: "Automotive Software Engineering (M.Sc.)",
    institute: "Technische Universität München",
    details: `Automotive Software Engineering Studies`,
    image: "logo_tum"
  },
  {
    year: "2013",
    degree: "Mechatronics (B.Sc.)",
    institute: "Friedrich Alexander Universität",
    details: `Mechatronics with early focus on Informatic, real time systems`,
    image: "logo_fau"
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div class="icon">
            <img src={"img/about/" + val.image + ".png"} />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
