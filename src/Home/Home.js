import styled from "styled-components";
import { Aboutme } from "./Aboutme";
import { Skills } from "./Skills";

const Wrap = styled.div``;

export const Home = () => {
  return (
    <Wrap>
      <Aboutme />
      <Skills />
    </Wrap>
  );
};
