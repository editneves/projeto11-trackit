import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import CardHabits from "../../components/CardHabits"
import HabitsRegistered from "../../components/HabitsRegistered"
import AddHabits from "../../components/AddHabits"

export default function HabitsPage() {


    return (
        <>
            <Habits>

                <NavBar />
                
                <AddHabits/>

                <Div>
                    <CardHabits />
                    <HabitsRegistered />
                    <TextHabits>
                        <h1>
                            Você não tem nenhum hábito cadastrado ainda. Adicione
                            um hábito para começar a trackear!
                        </h1>
                    </TextHabits>
                </Div>


                <Menu />

            </Habits>
        </>
    )
}

const Div = styled.div`
width: 375px;
height: 527px;
display: flex;
flex-direction: column;
`


const Habits = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
`
const TextHabits = styled.div`
width: 375px;
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