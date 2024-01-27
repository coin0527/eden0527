import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { Projecttitle } from "../components/Projecttitle";
import { ProjectImg } from "../components/ProjectImg";
import { Projectmain } from "../components/Projectmain";
import { Projecttech } from "../components/Projecttech";
const Wrap = styled.div`
  width: 100%;
  padding: 30px 5%;
  background-color: #cfb095;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  gap: 20px;
`;

const Box = styled.div`
  height: 800px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 5%;
  text-align: left;
  p {
    margin-top: 20px;
  }
`;

const Code = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }
`;

const Demo = styled.button`
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Project = () => {
  const weatherAppImage = process.env.PUBLIC_URL + "/Img/weatherapp.PNG";
  const JMovie = process.env.PUBLIC_URL + "/Img/JMovie.PNG";
  const NumberImage = process.env.PUBLIC_URL + "/Img/Number.PNG";
  const pp = process.env.PUBLIC_URL + "/Img/pp.PNG";
  const todoImage = process.env.PUBLIC_URL + "/Img/todo.PNG";

  return (
    <Wrap>
      <Title titlename="Project" />
      <Container>
        <Box>
          <Projecttitle pname="Weather App" />
          <ProjectImg imgSrc={weatherAppImage} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px", lineHeight: "20px" }}>
            API를 활용해 현재 위치의 날씨 정보를 알아오는 어플리케이션
          </h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2023.11.13~11.22</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>HTML5, CSS3, JavaScript, axios</h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
        <Box>
          <Projecttitle pname="Movie App" />
          <ProjectImg imgSrc={JMovie} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px", lineHeight: "20px" }}>
            API를 이용해 최신 유행하는 영화의 정보를 쉽고 빠르게 가져올 수 있고
            검색을 통해 원하는 영화를 찾아볼 수 있다.
          </h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2023.11.23~2023.12.06</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>
            HTML5, CSS3, JavaScript, React, React Hook Form
          </h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
        <Box>
          <Projecttitle pname="Todo App" />
          <ProjectImg imgSrc={todoImage} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px", lineHeight: "20px" }}>
            로컬스토리지를 활용해 기존의 정보를 저장 할 수 있다.
            <br /> 할 일을 추가, 삭제, 완료, 수정하여 계획 수립에 도움을 준다.
          </h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2023.12.07~2023.12.18</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>
            HTML5, CSS3, JavaScript, React, React Hook Form
          </h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
        <Box>
          <Projecttitle pname="Random Number" />
          <ProjectImg imgSrc={NumberImage} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px", lineHeight: "20px" }}>
            랜덤을 사용하여 최소값과 최대값 사이의 값을 도출해낸다.
          </h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2024.01.17~2024.01.18</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>HTML5, CSS3, JavaScript</h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
        <Box>
          <Projecttitle pname="Classic Game" />
          <ProjectImg imgSrc={weatherAppImage} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px", lineHeight: "20px" }}>
            언제 어디서나 남녀노소 즐길수있는 고전게임을 즐길 수 있다.
          </h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2024.01.19~2024.01.23</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>
            HTML5, CSS3, JavaScript, React, React Hook Form
          </h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
        <Box>
          <Projecttitle pname="Frontend Portfolio" />
          <ProjectImg imgSrc={pp} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px", lineHeight: "20px" }}>
            개인 포트폴리오를 저장 및 관리하기 위한 사이트 구성이다.
          </h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2024.01.23~2024.01.31</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>
            HTML5, JavaScript, React, React Hook Form
          </h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
      </Container>
    </Wrap>
  );
};
