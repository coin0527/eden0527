import styled from "styled-components";
import { Title } from "../components/Title";
import { Skilltitle } from "../components/Skilltitle";

import frontendImage from "../Img/frontend.PNG";
import versionControlImage from "../Img/versioncontrol.PNG";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 5%;
`;

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  height: 70vh;
  border: 1px solid #453a33;
  border-radius: 10px;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;

const Box2 = styled.div`
  width: 100%;
  max-width: 300px;
  height: 500px;
  background: url(${(props) => props.backgroundimage}) center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Skills = () => {
  return (
    <Wrap>
      <Title titlename="Skills" />
      <Container>
        <Box style={{ marginRight: "10px" }}>
          <Skilltitle title={"Frontend"} />
          <Box2 backgroundimage={frontendImage}></Box2>
        </Box>

        <Box style={{ marginLeft: "10px" }}>
          <Skilltitle title={"Version Control"} />
          <Box2 backgroundimage={versionControlImage}></Box2>
        </Box>
      </Container>
    </Wrap>
  );
};
