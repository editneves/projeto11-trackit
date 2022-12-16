import styled from "styled-components"
import { buttonColor } from "../constants/colors"

export default function Menu() {
    
    return (
        <>
            <MenuDiv>
                <p> Hábitos </p>
                <Hoje>Hoje</Hoje>
                <p> Histórico</p>
            </MenuDiv>
        </>
    )
}

const MenuDiv = styled.div`
margin-left: 0px;
margin-bottom: 0px;
width: 375px;
height: 70px;
background: #FFFFFF;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;
align-items: center;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;}
`
const Hoje = styled.div`
width: 91px;
height: 91px;
margin-bottom:40px;
border-radius: 45px;
background: ${buttonColor};
marging-top:14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #FFFFFF;
`
