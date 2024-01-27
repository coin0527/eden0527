import styled from "styled-components";
import { Aboutme } from "./Aboutme";
import { Skills } from "./Skills";
import { Banner } from "./Banner";
import { Archiving } from "./Archiving";
import { Project } from "./Project";
import { Contact } from "./Contact";

const Wrap = styled.div``;

export const Home = () => {
  return (
    <Wrap>
      <Banner />
      <Aboutme />
      <Skills />
      <Archiving />
      <Project />
      <Contact />
    </Wrap>
  );
};
