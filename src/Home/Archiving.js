import styled from "styled-components";
import { Title } from "../components/Title";

const Wrap = styled.div`
  width: 100%;
  padding: 30px 5%;
  height: 100vh;
  background-color: beige;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 280px;
  border: 1px solid #eeeeee;
  border-radius: 20px;
  margin: 30px auto;
  cursor: pointer;
  padding: 30px 5%;
  background-color: #fff;
  transition: border 0.5s ease, transform 0.5s ease;

  h2 {
    font-size: 30px;
    font-weight: 600;
  }
  h3 {
    margin: 25px 0 25px 0;
  }
  p {
    margin-bottom: 15px;
    font-size: 20px;
  }

  &:hover {
    border: 1px solid #453a33;
    transform: translateY(8px);
  }
`;

const Line = styled.div`
  border: 1px solid black;
  margin-top: 10px;
`;

export const Archiving = () => {
  return (
    <Wrap>
      <Title titlename="Archiving" />
      <Container>
        <Box>
          <h2> GitHub </h2>
          <Line />
          <h3> https://github.com/coin0527 </h3>
          <p> ✦ 과거 프로젝트, 프로그램, App의 소스코드 </p>
          <p> ✦ 혼자서 코딩 연습을 위해 끄적이던 소스 코드 </p>
          <p> ✦ 학부 시절 수강한 수업들의 코딩 과제 소스 코드 </p>
        </Box>
        <Box>
          <h2> Notion </h2>
          <Line />
          <h3>
            https://www.notion.so/Movie_project-69f5ff9570e441459913601d303305a1
          </h3>
          <p> ✦ 과거 프로젝트, 프로그램, App의 과정 </p>
          <p> ✦ 구체적인 계획, 일정표 </p>
          <p> ✦ 기획의도 및 프로젝트를 진행하며 느낀 점 </p>
        </Box>
      </Container>
    </Wrap>
  );
};
