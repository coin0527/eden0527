import styled from "styled-components";
import { Title } from "../components/Title";
import { Skilltitle } from "../components/Skilltitle";

import frontendImage from "../Img/frontend.PNG";
import versionControlImage from "../Img/versioncontrol.PNG";

const Wrap = styled.div`
  width: 100%;
  height: 90vh;
  padding: 30px 5%;
`;

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  height: 60vh;
  border: 1px solid #453a33;
  border-radius: 10px;
  background: url(${(props) => props.backgroundimage}) center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
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
        <Box backgroundimage={frontendImage} style={{ marginRight: "10px" }}>
          <Skilltitle title={"Frontend"} />
        </Box>

        <Box
          backgroundimage={versionControlImage}
          style={{ marginLeft: "10px" }}
        >
          <Skilltitle title={"Version Control"} />
        </Box>
      </Container>
    </Wrap>
  );
};
