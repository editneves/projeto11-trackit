import styled from "styled-components";
import { buttonColor } from "../../constante/colors";
import axios from "axios";
import { Base_URL } from "../../constante/urls";
import Group8 from "../../images/Group8.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/AuthContext";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
  const navigate = useNavigate();
  const [dadosLogin, setDadosLogin] = useState({ email: "", password: "" });
  const { user, setUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [showhTreeDots, setShowhTreeDots] = useState(false);

  const Login = () => {
    setDisabled(true);
    setShowhTreeDots(true);
  
    const promise = axios.post(`${Base_URL}/auth/login`, dadosLogin);
    promise.then((res) => {
      setUser(res.data);
      navigate("/hoje");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setDisabled(false);
    });
  };

  return (
    <>
      <div> {user.name} </div>
      <SignUp>
        <Img src={Group8} alt="logo" />

        <InputGroup>
          <input
            data-test="email-input"
            placeholder="email..."
            onChange={(content) =>
              setDadosLogin({ ...dadosLogin, email: content.target.value })
            }
            required
            type="email"
            disabled={disabled}
            //disabled={isDisabled}
          />
        </InputGroup>

        <InputGroup>
          <input
            data-test="password-input"
            type="password"
            placeholder="senha..."
            onChange={(content) =>
              setDadosLogin({ ...dadosLogin, password: content.target.value })
            }
            required
            disabled={disabled}
            //disabled={isDisabled}
          />
        </InputGroup>

        <SaveButton data-test="login-btn" disabled={false} onClick={Login}>
        
        <h1> Entrar </h1>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={showhTreeDots}
          /> 
          
        </SaveButton>

        <Link to="/cadastro">
          <TextLink data-test="signup-link">
            Não tem uma conta? Cadastre-se!
          </TextLink>
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
