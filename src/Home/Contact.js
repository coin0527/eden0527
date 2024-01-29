import React, { useState } from "react";
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
  const [formError, setFormError] = useState("");

  const handleSendClick = () => {
    // 각 필드의 값을 가져옴
    const nameValue = document.querySelector('input[name="name"]').value;
    const emailValue = document.querySelector('input[name="email"]').value;
    const messageValue = document.querySelector(
      'textarea[name="message"]'
    ).value;

    if (!nameValue || !emailValue || !messageValue) {
      setFormError("양식이 잘못되었습니다 빈칸이 있는지 확인해주세요.");
      return;
    }

    alert("메시지 전송 성공!");
  };

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
        <Input type="text" name="name" placeholder="name" />
        <Input type="email" name="email" placeholder="E-mail" />
        <MessageInput
          name="message"
          placeholder="Message"
          style={{ fontSize: "20px" }}
        />
        {formError && (
          <p style={{ color: "crimson", textAlign: "center" }}>{formError}</p>
        )}
        <Button
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onClick={handleSendClick}
        >
          SEND
        </Button>
      </InputWrap>
    </Wrap>
  );
};
