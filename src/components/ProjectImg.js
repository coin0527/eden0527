import styled from "styled-components";

const Wrap = styled.div``;
const Container = styled.div``;
const Imgbox = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;
  margin-top: 20px;
`;

export const ProjectImg = () => {
  return (
    <Wrap>
      <Container>
        <Imgbox></Imgbox>
      </Container>
    </Wrap>
  );
};
