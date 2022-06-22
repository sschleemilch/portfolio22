import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/bitopium/",
  },
  {
    iconName: <FiGithub />,
    link: "https://github.com/sschleemilch",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/sschleemilch/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
