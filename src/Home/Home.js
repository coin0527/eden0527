import styled from "styled-components";
import { Aboutme } from "./Aboutme";
import { Skills } from "./Skills";
import { Banner } from "./Banner";

const Wrap = styled.div``;

export const Home = () => {
  return (
    <Wrap>
      <Banner />
      <Aboutme />
      <Skills />
    </Wrap>
  );
};
