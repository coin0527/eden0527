import styled from "styled-components";
import { Title } from "../components/Title";

const Wrap = styled.div`
  width: 100%;
  padding: 30px 5%;
  height: 100vh;
`;

export const License = () => {
  return (
    <Wrap>
      <Title titlename="License" />
    </Wrap>
  );
};
