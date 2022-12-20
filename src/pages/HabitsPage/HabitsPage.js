import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import CardHabits from "../../components/CardHabits"
import AddHabits from "../../components/AddHabits"

export default function HabitsPage() {


    return (
        <>
            <Habits>

                <NavBar />
                
                <AddHabits/>

                <Div>
                    <CardHabits /> 
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
