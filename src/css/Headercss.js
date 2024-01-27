import styled from "styled-components";
import { keyframes } from "styled-components";

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

export const Con = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 5%;
  position: relative;

  h2 {
    color: #453a33;
    &:hover {
      color: salmon;
      transition: 0.3s;
    }
  }
`;
export const SlideMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: ${(props) => (props.isopen ? "block" : "none")};
  animation: ${slideDown} 0.5s ease-in-out;
  padding: 30px 5%;
  p {
    width: 100%;
    max-width: 100px;
    margin-bottom: 15px;
    font-size: 20px;
    cursor: pointer;
    color: #453a33;
    &:hover {
      color: salmon;
    }
  }
`;
