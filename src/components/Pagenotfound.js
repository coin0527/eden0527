import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
`;
const Imgbox = styled.div`
  font-size: 30px;
  color: "#453a33";
`;

export const Pagenotfound = () => {
  return (
    <Wrap>
      <Container>
        <Imgbox>죄송합니다. 현재 페이지는 준비중에 있습니다</Imgbox>
      </Container>
    </Wrap>
  );
};
