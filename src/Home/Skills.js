import styled from "styled-components";
import { Title } from "../components/Title";

const Wrap = styled.div`
  width: 100%;
  height: 300px;
`;

export const Skills = () => {
  return (
    <Wrap>
      <Title titlename="Skills" />
    </Wrap>
  );
};
