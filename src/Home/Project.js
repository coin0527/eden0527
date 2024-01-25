import styled from "styled-components";
import { Title } from "../components/Title";

const Wrap = styled.div`
  width: 100%;
  padding: 30px 5%;
  height: 100vh;
  background-color: #cfb095;
`;

const Container = styled.div`
  padding: 30px 0;
`;
const Box = styled.div`
  width: 100%;
  max-width: 80%;
  height: 500px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 20px;
  padding: 30px 5%;
`;

export const Project = () => {
  return (
    <Wrap>
      <Title titlename="Project" />
      <Container>
        <Box>123</Box>
      </Container>
    </Wrap>
  );
};
