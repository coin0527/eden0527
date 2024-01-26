import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { Projecttitle } from "../components/Projecttitle";
import { ProjectImg } from "../components/ProjectImg";
import { Projectmain } from "../components/Projectmain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
  height: 700px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 5%;
  text-align: left;
  p {
    margin-top: 20px;
  }
`;

const Mainp = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: 10px;
  h2 {
    font-size: 18px;
    font-weight: bold;
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
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                marginTop: "10px",
                fontSize: "18px",
              }}
            />
            <h2 style={{ marginTop: "10px" }}>주요기능</h2>
          </Mainp>
          <h3 style={{ marginTop: "10px" }}>
            현재 위치의 날씨 정보를 알아오는 어플리케이션
          </h3>
          <Projectmain />
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                fontSize: "18px",
              }}
            />
            <h2>Period (2023.11~)</h2>
          </Mainp>
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                fontSize: "18px",
              }}
            />
            <h2> Tech HTML5, JavaScript, axios </h2>
          </Mainp>
        </Box>
        <Box>
          <Projecttitle pname="Weather App" />
          <ProjectImg imgSrc={weatherAppImage} />
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                marginTop: "10px",
                fontSize: "18px",
              }}
            />
            <h2 style={{ marginTop: "10px" }}>주요기능</h2>
          </Mainp>
          <h3 style={{ marginTop: "10px" }}>
            현재 위치의 날씨 정보를 알아오는 어플리케이션
          </h3>
          <Projectmain />
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                fontSize: "18px",
              }}
            />
            <h2>Period (2023.11~)</h2>
          </Mainp>
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                fontSize: "18px",
              }}
            />
            <h2> Tech HTML5, JavaScript, axios </h2>
          </Mainp>
        </Box>
        <Box>
          <Projecttitle pname="Weather App" />
          <ProjectImg imgSrc={weatherAppImage} />
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                marginTop: "10px",
                fontSize: "18px",
              }}
            />
            <h2 style={{ marginTop: "10px" }}>주요기능</h2>
          </Mainp>
          <h3 style={{ marginTop: "10px" }}>
            현재 위치의 날씨 정보를 알아오는 어플리케이션
          </h3>
          <Projectmain />
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                fontSize: "18px",
              }}
            />
            <h2>Period (2023.11~)</h2>
          </Mainp>
          <Mainp>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                marginRight: "10px",
                fontSize: "18px",
              }}
            />
            <h2> Tech HTML5, JavaScript, axios </h2>
          </Mainp>
        </Box>
      </Container>
    </Wrap>
  );
};
