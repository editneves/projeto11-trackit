import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import DayHabits from "../../components/DayHabits"
import Day from "../../components/Day"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";


export default function HabitsPage() {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    navigate("/habitos");
    return (
        <>
        <div>{user.id} </div>
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