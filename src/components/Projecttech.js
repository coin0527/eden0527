import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  h2 {
    font-size: 18px;
    font-weight: bolder;
  }
`;

export const Projecttech = ({ name }) => {
  return (
    <Wrap>
      <FontAwesomeIcon
        icon={faCheck}
        style={{
          marginRight: "10px",
          marginTop: "10px",
          fontSize: "18px",
        }}
      />
      <h2 style={{ marginTop: "10px" }}>{name}</h2>
    </Wrap>
  );
};
