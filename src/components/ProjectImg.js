import React from "react";
import styled from "styled-components";

const Imgbox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  margin-top: 20px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
`;

export const ProjectImg = ({ imgSrc }) => {
  return <Imgbox imgSrc={imgSrc}></Imgbox>;
};
