import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import check from "../../images/check.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Base_URL } from "../../constante/urls";

export default function HabitsPage() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const token = localUser.token;

  const [todayHabits, setTodayHabits] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${Base_URL}/habits/today`, {
      headers: { Authorization: "Bearer " + token },
    });
    promise.then((res) => {
      console.log(res.data);
      setTodayHabits(res.data);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);
  const weekDayNames = [
    { shortDay: "D", longDay: "Domingo" },
    { shortDay: "S", longDay: "Segunda" },
    { shortDay: "T", longDay: "Terça" },
    { shortDay: "Q", longDay: "Quarta" },
    { shortDay: "Q", longDay: "Quinta" },
    { shortDay: "S", longDay: "Sexta" },
    { shortDay: "S", longDay: "Sábado" },
  ];
  const weekDayName = weekDayNames[new Date().getDay()].longDay;
  const dateNumber = new Date().getDate();
  const monthNumber = new Date().getMonth() + 1;

  console.log("esse", todayHabits);
  return (
    <>
      <Today>
        <NavBar />
        <DivHabits>
          <p>
            {weekDayName}, {dateNumber}/{monthNumber}{" "}
          </p>

          {todayHabits.map((element) => {
            if (element.done) {
              return <h1>{element.highestSequence} concluídos</h1>;
            } else{
              return <></>;
            }
            
          })}
        </DivHabits>

        {todayHabits.map((element, index) => {
          if (!element.done) {
            return (
              <Div>
                <CardHabitsDay key={index}>
                  <HabitsDay>
                    <Hab>
                      <p>{element.name}</p>
                      <h1>Sequência atual: {element.currentSequence} dias</h1>
                      <h1>Seu recorde: {element.highestSequence} dias </h1>
                    </Hab>
                    <Check>
                      <img src={check} alt="check" />
                    </Check>
                  </HabitsDay>
                </CardHabitsDay>
              </Div>
            );
          }
          return (
            <Div>
              <CardHabitsDay key={index}>
                <HabitsDay>
                  <Hab>
                    <p>{element.name}</p>
                    <h1>Sequência atual: <h2>{element.currentSequence} dias</h2> </h1> 
                    <h1>Seu recorde: <h2>{element.highestSequence} dias </h2></h1> 
                  </Hab>
                  <CheckDone>
                    <img src={check} alt="check" />
                  </CheckDone>
                </HabitsDay>
              </CardHabitsDay>
            </Div>
          );
        })}

        <Menu />
      </Today>
    </>
  );
}

const Div = styled.div`
  width: 375px;
  height: 527px;
  display: flex;
  flex-direction: column;
`;

const Today = styled.div`
  width: 375px;
  height: 774px;
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
`;

const DivHabits = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;
  margin-left: 17px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  p {
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 22.976px;
    color: #52b6ff;
  }
  h1 {
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #8FC549;
    h2 {
      margin-bottom: 0px;
      margin-top: 0px;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      color: #8fc549;
    }
  }
`;

const CardHabitsDay = styled.div`
  width: 340px;
  margin-left: 18px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
`;
const HabitsDay = styled.div`
  width: 340px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;
const Hab = styled.div`
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  h1 {
    width: auto;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #8fc549;
  }
`;
const Check = styled.div`
  box-sizing: border-box;
  width: 69px;
  height: 69px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 35px;
    height: 28px;
  }
`;
const CheckDone = styled.div`
  box-sizing: border-box;
  width: 69px;
  height: 69px;
  background: #8fc549;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 35px;
    height: 28px;
  }
`;
