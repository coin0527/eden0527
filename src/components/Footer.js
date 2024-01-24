import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: #453a33;
  h3 {
    color: white;
    display: flex;
    justify-content: center;
    line-height: 80px;
  }
`;

export const Footer = () => {
  return (
    <Wrap>
      <h3> &copy; 2024. JDW Portfolio. All rights reserved. </h3>
    </Wrap>
  );
};
