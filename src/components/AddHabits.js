import styled from "styled-components"
import { NavBarColor } from "../constante/colors"

export default function AddHabits() {
    
    return (
        <>
            <DivHabits>
                <TextHabits> Meus hábitos </TextHabits>
                <AddHabitss> <p>+</p> </AddHabitss>
            </DivHabits>
        </>
    )
}

const DivHabits = styled.div`
width: 375px;
height: 77px;
background: #E5E5E5;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const AddHabitss = styled.div`
width: 40px;
height: 35px;
margin-right:18px;
border-radius: 4.63636px;
background: "#52B6FF;
display: flex;
justify-content: center;
align-items: center;
p{
    width: 16px;
    height: 34px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
}
`
const TextHabits = styled.label`
margin-left:17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: ${NavBarColor};
`