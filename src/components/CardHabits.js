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

                <Options>
                    <p> Hábitos </p>
                    <Salvar><p>Salvar</p></Salvar>
                </Options>

            </CardHabitsDay>
        </>
    )
}

const CardHabitsDay = styled.div`
width: 340px;
height: 180px;
margin-left:19px;
background: #FFFFFF;
border-radius: 5px;
`
const DaysDiv = styled.div`
width: 303px;
height: 45px;
margin-left:19px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
align-items: flex-end;
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
flex-wrap: nowrap;
align-items: center;
justify-content: center;
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
margin-left:19px;
margin-top:18px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
`
const Options = styled.div`
width: 176px;
height: 45px;
margin-top:29px;
margin-left:148px;
display:flex;
align-items: center;
justify-content: space-between;
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
const Salvar = styled.div`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display:flex;
align-items: center;
justify-content: center;

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
`