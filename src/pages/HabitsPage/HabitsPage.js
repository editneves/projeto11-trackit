import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import CardHabits from "../../components/CardHabits"
//import { buttonColor } from "../../constants/colors"
// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Base_URL } from "../../constants/urls"
// import Group8 from "../../images/Group8.png"
// import { Link } from "react-router-dom"


export default function HabitsPage() {
    // const [signUp, setSignUp] = useState(undefined)
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [name, setName] = useState("")
    // const [photo, setPhoto] = useState("")

    // useEffect(() => {

    //     const user = {
    //         email: "joe@respondeai.com.br",
    //         password: "123456"
    //     }

    //     const url_post = `${Base_URL}auth/login`
    //     const promise = axios.post(url_post, user)
    //     promise.then(res => {
    //         setSignUp(res.data)
    //     })
    //     promise.catch(err => console.log(err.response.data))
    //     setPassword("")
    //     setEmail("")

    // }, [])

    // if (signUp === undefined) {
    //     return <div>Carregando...</div>
    // }

    return (
        <>
            <SignUp>
                <NavBar />

                <Habits>
                    <h1> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </Habits>
                <CardHabits />
                <Menu />

                {/*  <Img src={Group8} alt="logo" />
                <InputGroup>
                   
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
                <InputGroup>
                    <input
                        data-test=""
                        id="name"
                        type="text"
                        placeholder="nome..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <input
                        data-test=""
                        id="photo"
                        type="text"
                        placeholder="foto..."
                        value={photo}
                        onChange={e => setPhoto(e.target.value)}
                        required
                    />
                </InputGroup>
                <SaveButton data-test=""><h1>Cadastrar</h1></SaveButton>
                <TextLink>Já tem uma conta? Faça login!</TextLink> */}
            </SignUp>
        </>
    )
}

const SignUp = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
// `
// const Img = styled.img`
// width: 180px;
// height: 178.38px;
// left: 97px;
// top: 68px;
// `;

const Habits = styled.div`
width: 375px;
height: 450px;
background: #E5E5E5;
h1{
    width: 338px;
    height: 74px;
    margin-left: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`
// const SaveButton = styled.div`
// width: 303px;
// height: 45px;
// background:${buttonColor};
// border-radius: 4.63636px;
// h1{
//   font-family: 'Lexend Deca';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 20.976px;
//   line-height: 26px;
//   text-align: center;
//   color: #FFFFFF;
//   align-items: center;
// }
// `
// const TextLink = styled.label`
// margin-top: 20px;
// font-family: 'Lexend Deca';
// font-style: normal;
// font-weight: 400;
// font-size: 13.976px;
// line-height: 17px;
// text-align: center;
// text-decoration-line: underline;
// color: #52B6FF;
// `