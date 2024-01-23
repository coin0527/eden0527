import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Wrap, Con, SlideMenu } from "../css/Headercss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrap>
      <Con>
        <Link to="/">
          <h2> JDW Portfolio </h2>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          style={{ cursor: "pointer", color: "#453a33" }}
          onClick={toggleMenu}
        />
        <SlideMenu isOpen={isMenuOpen}>
          <p>About me</p>
          <p>Skills</p>
          <p>Archiving</p>
          <p>Project</p>
          <p>Career</p>
          <p>License</p>
        </SlideMenu>
      </Con>
    </Wrap>
  );
};
