import styled from "styled-components"
import { NavBarColor } from "../constants/colors"

export default function Historic() {

    return (
        <>
            <DivHistoric>
                <p>Histórico</p>
                <h1>Em breve você poderá ver o histórico dos seus 
                    hábitos aqui!
                </h1>
            </DivHistoric>
        </>
    )
}

const DivHistoric = styled.div`
margin-left:17px;
background: #E5E5E5;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
p{ 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: ${NavBarColor};
}
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`

