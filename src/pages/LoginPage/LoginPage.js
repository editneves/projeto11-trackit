import styled from "styled-components"
import { buttonColor } from "../../constants/colors"
import { useEffect, useState } from "react"
import axios from "axios"
import { Base_URL } from "../../constants/urls"
import Group8 from "../../images/Group8.png"
// import { Link } from "react-router-dom"


export default function LoginPage() {
  const [signUp, setSignUp] = useState(undefined)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {

    const user = {
      email: "joe@respondeai.com.br",
      password: "123456"
    }

    const url_post = `${Base_URL}auth/login`
    const promise = axios.post(url_post, user)
    promise.then(res => {
      setSignUp(res.data)
    })
    promise.catch(err => console.log(err.response.data))
    setPassword("")
    setEmail("")

  }, [])

  if (signUp === undefined) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <SignUp>
        
        <Img src={Group8} alt="logo" />
        
      
        <InputGroup>
          <input
            data-test=""
            id="email"
            type="text"
            placeholder="email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <input
            data-test=""
            id="password"
            type="text"
            placeholder="senha..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <SaveButton data-test=""><h1>Entrar</h1></SaveButton>
        <TextLink>Não tem uma conta? Cadastre-se!</TextLink>
      </SignUp>
    </>
  )
}

const SignUp = styled.div`
display: flex;
height: 220px;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
`
const Img = styled.img`
width: 180px;
height: 178.38px;
left: 97px;
top: 68px;
`;

const InputGroup = styled.div`
width: 303px;
height: 45px;
margin-bottom:10px;
input{
  width: 303px;
  height: 45px;
  left: 36px;
  top: 279px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  box-sizing: border-box;
}
  placeholder {
  width: 58px;
  height: 25px;
  left: 47px;
  top: 339px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #DBDBDB;
}
`
const SaveButton = styled.div`
width: 303px;
height: 45px;
background:${buttonColor};
border-radius: 4.63636px;
h1{
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  align-items: center;
}
`
const TextLink = styled.label`
margin-top: 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`
