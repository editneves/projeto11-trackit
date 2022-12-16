import styled from "styled-components"
import check from "../images/check.png"
//import { buttonColor } from "../constants/colors"

export default function HabitsRegistered() {

    return (
        <>
            <CardHabitsDay>

                <HabitsDay>

                    <Hab>
                        <p>Ler 1 capítulo de livro</p>
                        <h1>Sequência atual: 3 dias</h1>
                        <h1>Seu recorde: 5 dias</h1>
                    </Hab>
                    <Check>
                        <img src={check} alt="check" />
                    </Check>

                </HabitsDay>


            </CardHabitsDay>
        </>
    )
}

const CardHabitsDay = styled.div`
width: 340px;
margin-left:18px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
`
const HabitsDay = styled.div`
width: 340px;
margin-left:10px;
display:flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;
align-items: center;
`
const Hab = styled.div`
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}
`
const Check = styled.div`
box-sizing: border-box;
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
display:flex;
align-items: center;
justify-content: center;
img{
    width: 35px;
    height: 28px;
}
`