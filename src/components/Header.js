import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

const Con = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 5%;
  position: relative;

  h2 {
    color: #453a33;
    &:hover {
      color: salmon;
      transition: 0.3s;
    }
  }
`;
const SlideMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  animation: ${slideDown} 0.5s ease-in-out;
  padding: 30px 5%;
  p {
    width: 100%;
    max-width: 100px;
    margin-bottom: 15px;
    font-size: 20px;
    cursor: pointer;
    color: #453a33;
    &:hover {
      color: salmon;
    }
  }
`;

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
