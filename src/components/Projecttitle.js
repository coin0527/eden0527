import styled from "styled-components";

const Wrap = styled.div``;
const Continer = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`;
const Line = styled.div`
  border: 1px solid black;
  margin-top: 20px;
`;

export const Projecttitle = ({ pname }) => {
  return (
    <Wrap>
      <Continer>
        <h2>{pname}</h2>
        <Line />
      </Continer>
    </Wrap>
  );
};
