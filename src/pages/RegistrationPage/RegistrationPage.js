import styled from "styled-components";
import { buttonColor } from "../../constante/colors";
import { useState } from "react";
import axios from "axios";
import { Base_URL } from "../../constante/urls";
import Group8 from "../../images/Group8.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

export default function RegistrationPage() {
 
  const navigate = useNavigate();

  const [dadosCadastro, setDadosCadastro] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });
  

  const Cadastrar = () => {
    console.log(dadosCadastro)
    const promise = axios.post(`${Base_URL}/auth/sign-up`, dadosCadastro);
    promise.then((res) => {
      console.log(res.data);
      navigate("/");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  };

  return (
    <>
      <SignUp>
        <Img src={Group8} alt="logo" />
        <InputGroup>
          <input
            data-test="email-input"
            placeholder="email..."
            onChange={(content) => setDadosCadastro({ ...dadosCadastro, email: content.target.value })}
            required
            type="email"
            //disabled={isDisabled}
          />
        </InputGroup>
        <InputGroup>
          <input
           data-test="user-image-input"
           placeholder="image..."
           onChange={(content) => setDadosCadastro({ ...dadosCadastro, image: content.target.value })}
           required
           type="url"
           //disabled={isDisabled}
          />
        </InputGroup>
        <InputGroup>
          <input
            data-test="user-name-input"
            placeholder="nome..."
            onChange={(content) => setDadosCadastro({ ...dadosCadastro, name: content.target.value })}
            required
            type="name"
            //disabled={isDisabled}
          />
        </InputGroup>
       
        <InputGroup>
          <input
            data-test="password-input"
            placeholder="password..."
            onChange={(content) => setDadosCadastro({ ...dadosCadastro, password: content.target.value })}
            required
            type="password"
            //disabled={isDisabled}
          />
        </InputGroup>
        <SaveButton data-test="signup-btn" onClick={Cadastrar}>
          <h1>Cadastrar</h1>
        </SaveButton>
        <Link to="/">
        <TextLink data-test="login-link">Já tem uma conta? Faça login!</TextLink>
        </Link>
        
      </SignUp>
    </>
  );
}

const SignUp = styled.div`
  display: flex;
  height: 220px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;
const Img = styled.img`
  width: 180px;
  height: 178.38px;
  left: 97px;
  top: 68px;
`;

const InputGroup = styled.div`
  width: 303px;
  height: 45px;
  margin-bottom: 10px;
  input {
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
  }
  placeholder {
    width: 58px;
    height: 25px;
    left: 47px;
    top: 339px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;
const SaveButton = styled.div`
  width: 303px;
  height: 45px;
  background: ${buttonColor};
  border-radius: 4.63636px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    align-items: center;
  }
`;
const TextLink = styled.label`
  margin-top: 20px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;
