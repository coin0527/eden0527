import styled from "styled-components";
import { Title } from "../components/Title";
import { Skilltitle } from "../components/Skilltitle";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 5%;
`;

const Box = styled.div`
  width: 100%;
  max-width: 50%;
  border: 1px solid #453a33;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const Skills = () => {
  return (
    <Wrap>
      <Title titlename="Skills" />
      <Container>
        <Box>
          <Skilltitle title={"Frontend"} />
        </Box>

        <Box>
          <Skilltitle title={"Version Control"} />
        </Box>

        <Box>
          <Skilltitle title={"Mobile App"} />
        </Box>
      </Container>
    </Wrap>
  );
};
