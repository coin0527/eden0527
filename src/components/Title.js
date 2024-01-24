import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 600;
  color: #453a33;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Con = styled.div`
  margin-top: 100px;
`;

export const Title = ({ titlename }) => {
  return (
    <div>
      <Wrap>
        <Con>
          <FontAwesomeIcon icon={faSeedling} style={{ textAlign: "center" }} />
          {titlename}
        </Con>
      </Wrap>
    </div>
  );
};
