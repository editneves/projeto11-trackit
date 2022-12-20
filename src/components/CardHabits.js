import styled from "styled-components";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import { Base_URL } from "../constante/urls";
import lixeira from "../images/Vector.png";
import CreateHabits from "./CreateHabits";

export default function CardHabits() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const token = localUser.token;
  const { receberHabit, setReceberHabit } = useContext(AuthContext);

  // buscar habitos cadastrados
  useEffect(() => {
    const promise = axios.get(`${Base_URL}/habits`, {
      headers: { Authorization: "Bearer " + token },
    });
    promise.then((res) => {
      setReceberHabit(res.data);
      habitsRegistered();
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  // deletar habitos
  const DeleteHabits = (event) => {
    if (window.confirm("Quer mesmo apagar o hábito?")) {
      const idDelete = event.currentTarget.id;
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      axios
        .delete(`${Base_URL}/habits/${idDelete}`, config)
        .then(() => alert("Delete successful"));
    } else {
      return habitsRegistered();
    }
  };

  const Teste = ({ daysTeste }) => {
    const fixedDays = [
      { name: "D", numberDay: "1" },
      { name: "S", numberDay: "2" },
      { name: "T", numberDay: "3" },
      { name: "Q", numberDay: "4" },
      { name: "Q", numberDay: "5" },
      { name: "S", numberDay: "6" },
      { name: "S", numberDay: "7" },
    ];

    return (
      <>
        {daysTeste.days.map((d) => {
          return (
            <DaysDiv>
              <Days>{d}</Days>
            </DaysDiv>
          );
        })}
      </>
    );
  };

  const habitsRegistered = () => {
    if (receberHabit) {
      return (
        <>
          {receberHabit.map((habit) => {
            return (
              <>
                <CardHabitsDay  data-test="habit-container">
                  <HabitsDay>
                    <p data-test="habit-name" >{habit.name}</p>
                    <ImgLixeira
                      data-test="habit-delete-btn"
                      id={habit.id}
                      src={lixeira}
                      alt="lixeira"
                      value={habit.id}
                      onClick={DeleteHabits}
                    />
                  </HabitsDay>
                  <Div>
                  <Teste daysTeste={habit}  data-test="habit-day"/>
                  </Div>
                </CardHabitsDay>
              </>
            );
          })}
        </>
      );
    }
  };

  return <>{receberHabit ? habitsRegistered() : <CreateHabits />}</>;
}

const Div = styled.div`
  width: 250px;
  height: 45px;
  margin-left: 14px;
  background: #ffffff;
  display: flex;
`;
const DaysDiv = styled.div`
  width: 303px;
  height: 45px;
  margin-left: 19px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
`;
const Days = styled.button`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-left: 4px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const HabitsDay = styled.div`
  width: 303px;
  height: 25px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
`;
const ImgLixeira = styled.img`
  width: 13px;
  height: 15px;
  margin-left: 100px;
`;
const CardHabitsDay = styled.div`
  width: 340px;
  height: 91px;
  margin-top: 10px;
  margin-left: 19px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  
`;
