import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";


export default function HistoricPage() {
  return (
    <>
      <NavBar />
      <Hist>
        <Div>
        <DivHistoric>
                <p>Histórico</p>
                <h1>Em breve você poderá ver o histórico dos seus 
                    hábitos aqui!
                </h1>
        </DivHistoric>
        </Div>
      </Hist>
      <Menu />
    </>
  );
}

const Hist = styled.div`
  width: 375px;
  height: 527px;
  display: flex;
  flex-direction: column;
  background: #E5E5E5;
`;
const Div = styled.div`
  width: 375px;
  height: 527px;
  display: flex;
  flex-direction: column;
`;

const DivHistoric = styled.div`
margin-left:17px;
background: #E5E5E5;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
p{ 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #52B6FF;
}
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`

