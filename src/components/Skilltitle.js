import styled from "styled-components";

const Wrap = styled.div`
  font-size: 24px;
  padding: 30px 5%;
  text-align: center;
  color: #453a33;
`;
const Line = styled.div`
  width: 50%;
  border: 1px solid #453a33;
  margin: 10px auto;
`;

export const Skilltitle = ({ title }) => {
  return (
    <Wrap>
      {title}
      <Line />
    </Wrap>
  );
};
