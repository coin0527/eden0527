import styled from "styled-components";
import { Aboutme } from "./Aboutme";
import { Skills } from "./Skills";
import { Banner } from "./Banner";
import { Archiving } from "./Archiving";
import { Project } from "./Project";
import { Contact } from "./Contact";
import { Element } from "react-scroll";

const Wrap = styled.div``;

export const Home = () => {
  return (
    <Wrap>
      <Banner />
      <Element name="aboutMe">
        <Aboutme />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Archiving">
        <Archiving />
      </Element>
      <Element name="Project">
        <Project />
      </Element>
      <Contact />
    </Wrap>
  );
};
