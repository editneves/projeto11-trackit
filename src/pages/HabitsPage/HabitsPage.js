import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import CardHabits from "../../components/CardHabits"
import AddHabits from "../../components/AddHabits"
import CreateHabits from "../../components/CreateHabits"

export default function HabitsPage() {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const token = localUser.token;

    return (
        <>
           
            <Habits>
            <NavBar/>
                <AddHabits/>
                
                <Div>
                <CreateHabits/>
                <CardHabits /> 
                   
                </Div>
                <Menu/>
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
height: 774px;
display: flex;
flex-direction: column;
`
