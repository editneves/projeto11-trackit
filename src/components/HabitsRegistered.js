import styled from "styled-components"
import lixeira from "../images/Vector.png"
//import { buttonColor } from "../constants/colors"

export default function HabitsRegistered() {

    return (
        <>
            <CardHabitsDay>

                <HabitsDay>
                    <p>Ler 1 capítulo de livro</p>
                    <ImgLixeira src={lixeira} alt="lixeira" />
                </HabitsDay>
            
                <DaysDiv>
                    <Days><h1>D </h1></Days>
                    <Days><h1>S </h1></Days>
                    <Days><h1>T </h1></Days>
                    <Days><h1>Q </h1></Days>
                    <Days><h1>Q </h1></Days>
                    <Days><h1>S </h1></Days>
                    <Days><h1>S </h1></Days>
                </DaysDiv>

            </CardHabitsDay>
        </>
    )
}

const CardHabitsDay = styled.div`
width: 340px;
height: 91px;
margin-top:10px;
margin-left:19px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction: column;
justify-content: center;
`
const HabitsDay = styled.div`
width: 303px;
height: 25px;
margin-left:15px;
display:flex;
align-items: center;
justify-content: space-between;
align-content: center;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
`
const ImgLixeira = styled.img`
width: 13px;
height: 15px;
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
