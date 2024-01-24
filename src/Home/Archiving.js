import styled from "styled-components";
import { Title } from "../components/Title";

const Wrap = styled.div`
  width: 100%;
  padding: 30px 5%;
  height: 100vh;
  background-color: beige;
`;

export const Archiving = () => {
  return (
    <Wrap>
      <Title titlename="Archiving" />
    </Wrap>
  );
};
