import styled from "styled-components";

const Wrap = styled.div`
  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #453a33;
  background-color: #cfb095;

  h2 {
    margin-bottom: 10px;
    font-size: 30px;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 40px;
  }
  p {
    letter-spacing: -1px;
    margin-top: 5px;
  }
`;

const Line = styled.div`
  width: 100%;
  max-width: 30px;
  border: 1px solid #453a33;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  margin-top: 30px;
  background-color: #553f2d;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #453a33;
    transition: 0.3s;
  }
`;

export const Banner = () => {
  return (
    <Wrap>
      <Container>
        <h2> 정다운 </h2>
        <h3> Frontend Portfolio </h3>
        <Line />
        <p> 안녕하세요. </p>
        <p> 프론트엔드 개발을 꿈꾸는 개발자 지망생입니다. </p>
        <p> 해야할 일이 있다면, 끝까지 최선을 다하는 것이 저의 장점입니다. </p>
        <Button> More View </Button>
      </Container>
    </Wrap>
  );
};
