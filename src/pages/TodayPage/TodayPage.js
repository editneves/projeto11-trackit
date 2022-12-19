import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import DayHabits from "../../components/DayHabits"
import Day from "../../components/Day"


export default function HabitsPage() {
    
  
    return (
        <>
            <Today>

                <NavBar />
                <Day />
                
                <Div>
                    <DayHabits />
                </Div>

                <Menu />
            </Today>
        </>
    )
}

const Div = styled.div`
width: 375px;
height: 527px;
display: flex;
flex-direction: column;
`


const Today = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
`