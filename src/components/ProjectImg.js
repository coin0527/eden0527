import React from "react";
import styled from "styled-components";

const Imgbox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  background-image: url(${(props) => props.imgSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ProjectImg = ({ imgSrc }) => {
  return <Imgbox imgSrc={imgSrc}></Imgbox>;
};
