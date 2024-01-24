import styled from "styled-components";
import { Aboutme } from "./Aboutme";
import { Skills } from "./Skills";
import { Banner } from "./Banner";
import { Archiving } from "./Archiving";
import { Project } from "./Project";
import { Career } from "./Career";
import { License } from "./License";
import { Footer } from "../components/Footer";

const Wrap = styled.div``;

export const Home = () => {
  return (
    <Wrap>
      <Banner />
      <Aboutme />
      <Skills />
      <Archiving />
      <Project />
      <Career />
      <License />
    </Wrap>
  );
};
