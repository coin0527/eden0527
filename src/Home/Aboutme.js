import styled from "styled-components";
import { Title } from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCakeCandles,
  faEnvelope,
  faPencil,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 100%;
  height: 60vh;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 5%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 100px;
  font-size: 20px;
  align-items: center;
`;

const Con = styled.div`
  width: 100%;
  max-width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Name = styled(CenteredDiv)``;
const Birthday = styled(CenteredDiv)``;
const Adress = styled(CenteredDiv)``;
const Call = styled(CenteredDiv)``;
const Email = styled(CenteredDiv)``;
const Spec = styled(CenteredDiv)``;
const Semicon = styled.div`
  margin-bottom: 10px;
`;

export const Aboutme = () => {
  return (
    <Wrap>
      <Title titlename="About Me" />
      <Con>
        <Profile>
          <Name>
            <Semicon>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
              이름
            </Semicon>
            <h2> 정다운</h2>
          </Name>
          <Birthday>
            <Semicon>
              <FontAwesomeIcon
                icon={faCakeCandles}
                style={{ marginRight: "10px" }}
              />
              생년월일
            </Semicon>
            <h2>98.05.27</h2>
          </Birthday>
          <Adress>
            <Semicon>
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ marginRight: "10px" }}
              />
              주소
            </Semicon>
            <h2> 경남 김해시 금관대로</h2>
          </Adress>
          <Call>
            <Semicon>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
              전화번호
            </Semicon>
            <h2> - </h2>
          </Call>
          <Email>
            <Semicon>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px" }}
              />
              E-mail
            </Semicon>
            <h2> nako2020@naver.com </h2>
          </Email>
          <Spec>
            <Semicon>
              <FontAwesomeIcon
                icon={faPencil}
                style={{ marginRight: "10px" }}
              />
              학력
            </Semicon>
            <h2> 인제대학교(컴공) </h2>
          </Spec>
        </Profile>
      </Con>
    </Wrap>
  );
};
