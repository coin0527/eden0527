// Project.js
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
  height: 750px;
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
  const weatherAppImage = "../Img/weatherapp.PNG";

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
          <h3 style={{ marginTop: "10px" }}>2023.11~</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>HTML5, CSS3, JavaScript, axios</h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
        <Box>
          <Projecttitle pname="Movie App" />
          <ProjectImg imgSrc={weatherAppImage} />
          <Projecttech name="주요기능" />
          <h3 style={{ marginTop: "10px" }}>-</h3>
          <Projectmain />
          <Projecttech name="Period" />
          <h3 style={{ marginTop: "10px" }}>2023.11~</h3>
          <Projecttech name="Tech" />
          <h3 style={{ marginTop: "10px" }}>HTML5, CSS3, JavaScript, axios</h3>
          <Projecttech name="GitHub" />
          <Code> 코드 </Code>
          <Demo> Demo </Demo>
        </Box>
      </Container>
    </Wrap>
  );
};
