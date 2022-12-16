import styled from "styled-components"
//import { buttonColor } from "../constants/colors"

export default function CardHabits() {

    return (
        <>
            <CardHabitsDay>
                <InputHabits type="text" placeholder="nome do hábito" />
            
                <DaysDiv>
                    <Days><h1>D </h1></Days>
                    <Days><h1>S </h1></Days>
                    <Days><h1>T </h1></Days>
                    <Days><h1>Q </h1></Days>
                    <Days><h1>Q </h1></Days>
                    <Days><h1>S </h1></Days>
                    <Days><h1>S </h1></Days>
                </DaysDiv>
                <Options></Options>

            </CardHabitsDay>
        </>
    )
}

const CardHabitsDay = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
`

const DaysDiv = styled.div`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
display:flex;
`
const Days = styled.div`
box-sizing: border-box;
width: 30px;
height: 30px;
margin-left:4px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
display:flex;
display: flex;
flex-wrap: nowrap;
align-items: center;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}`

const InputHabits = styled.div`
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
`
const Options = styled.div`
width: 303px;
height: 45px;
display:flex;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
}
`
