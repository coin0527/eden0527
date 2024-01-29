import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div``;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 25px;
  h3 {
    font-size: 28px;
  }
`;
const Title = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

const MessageInput = styled.textarea`
  width: 100%;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  height: 150px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: center;

  &:hover {
    background-color: #45a049;
  }
`;

export const Contact = () => {
  return (
    <Wrap>
      <Container>
        <Title>
          <h3> Contact </h3>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "28px", marginLeft: "20px" }}
          />
        </Title>
      </Container>
      <InputWrap>
        <Input type="text" placeholder="name" />
        <Input type="email" placeholder="E-mail" />
        <MessageInput placeholder="Message" style={{ fontSize: "20px" }} />
        <Button style={{ marginLeft: "10px" }}> SEND </Button>
      </InputWrap>
    </Wrap>
  );
};
