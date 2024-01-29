import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Wrap, Con, SlideMenu } from "../css/Headercss";
import { Link as ScrollLink } from "react-scroll";

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
        <SlideMenu isopen={isMenuOpen}>
          <ScrollLink
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            style={{ fontWeight: "500" }}
          >
            <p>About me</p>
          </ScrollLink>
          <ScrollLink
            to="Skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            style={{ fontWeight: "500" }}
          >
            <p>Skills</p>
          </ScrollLink>
          <ScrollLink
            to="Archiving"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            style={{ fontWeight: "500" }}
          >
            <p>Archiving</p>
          </ScrollLink>
          <ScrollLink
            to="Project"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            style={{ fontWeight: "500" }}
          >
            <p>Project</p>
          </ScrollLink>
          <Link to="/*" style={{ fontWeight: "500" }}>
            <p>Career</p>
            <p>License</p>
          </Link>
        </SlideMenu>
      </Con>
    </Wrap>
  );
};
