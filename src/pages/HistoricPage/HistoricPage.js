import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import Historic from "../../components/Historic"

export default function HistoricPage() {


    return (
        <>
            <Hist>
                <NavBar />
                <Div>
                    <Historic />
                </Div>
                <Menu />
            </Hist>
        </>
    )
}

const Hist = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
`
const Div = styled.div`
width: 375px;
height: 527px;
display: flex;
flex-direction: column;
`
