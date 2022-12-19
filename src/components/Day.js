import styled from "styled-components"
import { NavBarColor } from "../constante/colors"

export default function Day() {

    return (
        <>
            <DivHabits>

                <p>Segunda, 17/05  </p>
                <h1>Nenhum hábito concluído ainda</h1>

            </DivHabits>
        </>
    )
}

const DivHabits = styled.div`
margin-top:28px;
margin-bottom:28px;
margin-left:17px;
background: #E5E5E5;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
p{
    margin-bottom:0px;
    margin-top:0px;
    font-size: 22.976px;
    color: ${NavBarColor};
}
h1{
    margin-bottom:0px;
    margin-top:0px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #BABABA;
}
`

