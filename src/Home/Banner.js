import styled from "styled-components";
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Wrap = styled.div`
  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #453a33;
  background-color: #cfb095;

  h2 {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 600;
  }
  p {
    letter-spacing: -1px;
    margin-top: 5px;
  }
`;

const Line = styled.div`
  width: 100%;
  max-width: 50px;
  border: 1px solid #453a33;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  margin-top: 30px;
  background-color: #553f2d;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #453a33;
    transition: 0.3s;
  }
`;

export const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrap>
      <Container>
        <h2> 정다운 </h2>
        <h3> Frontend Portfolio </h3>
        <Line />
        <p> 안녕하세요. </p>
        <p> 프론트엔드 개발을 꿈꾸는 개발자 지망생입니다. </p>
        <p> 맡은 일을 끝까지 최선을 다하는 것이 저의 장점입니다. </p>
        <Element name="about">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            style={{ fontWeight: "500" }}
          >
            <Button> More View </Button>
          </ScrollLink>
        </Element>
      </Container>
    </Wrap>
  );
};
