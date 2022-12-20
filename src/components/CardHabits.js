import styled from "styled-components";
import { NavBarColor } from "../constante/colors";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import { Base_URL } from "../constante/urls";
import lixeira from "../images/Vector.png";
import { useNavigate } from "react-router-dom";

export default function CardHabits() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const token = localUser.token;
  const [disabled, setDisabled] = useState(false);
  const [dadosHabits, setDadosHabits] = useState({ name: "", days: [] });
  const { user, setUser } = useContext(AuthContext);
  const { showAddHabitComponent, setShowAddHabitComponent } =
    useContext(AuthContext);
  const { showDayHabit, setShowDayHabit } = useContext(AuthContext);
  const { enviarHabit, setEnviarHabit } = useContext(AuthContext);
  const { receberHabit, setReceberHabit } = useContext(AuthContext);
  const { showHabitRegistered, setShowHabitRegistered } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const array = [];

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

  useEffect(() => {
    const promise = axios.get(`${Base_URL}/habits`, {
      headers: { Authorization: "Bearer " + user.token },
    });
    promise.then((res) => {
      setReceberHabit(res.data);
      setShowHabitRegistered(true);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setShowAddHabitComponent(true);
      addHabits();
    });
  }, []);

  const habitsRegistered = () => {
    if (showHabitRegistered) {
      return (
        <>
          {receberHabit.map((habit) => {
            return (
              <>
                <CardHabitsDay>
                  <HabitsDay>
                    <p>{habit.name}</p>
                    <ImgLixeira
                      id={habit.id}
                      src={lixeira}
                      alt="lixeira"
                      value={habit.id}
                      onClick={DeleteHabits}
                    />
                  </HabitsDay>
                  <Teste daysTeste={habit} />
                </CardHabitsDay>
              </>
            );
          })}
        </>
      );
    }
  };

  const daySelect = (event) => {
    if (!array.includes(event.currentTarget.id)) {
      array.push(event.currentTarget.id);
    }
  };

  const DeleteHabits = (event) => {
    const idDelete = event.currentTarget.id;
    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    axios
      .delete(`${Base_URL}/habits/${idDelete}`, config)
      .then(() => alert("Delete successful"));
  };

  const addHabits = () => {
    if (showAddHabitComponent) {
      return (
        <>
          <CardHabitsDay>
            <InputHabits>
              <input
                type="text"
                data-test="habit-name-input"
                placeholder="nome do hábito..."
                onChange={(content) =>
                  setDadosHabits({ name: content.target.value, days: [] })
                }
                disabled={disabled}
                required
              ></input>
            </InputHabits>

            <DaysDiv>
              <Days
                data-test="habit-day"
                id="1"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>D </h1>
              </Days>

              <Days
                data-test="habit-day"
                id="2"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>S </h1>
              </Days>
              <Days
                data-test="habit-day"
                id="3"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>T </h1>
              </Days>
              <Days
                data-test="habit-day"
                id="4"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>Q </h1>
              </Days>
              <Days
                data-test="habit-day"
                id="5"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>Q </h1>
              </Days>
              <Days
                data-test="habit-day"
                id="6"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>S </h1>
              </Days>
              <Days
                data-test="habit-day"
                id="7"
                onClick={daySelect}
                disabled={disabled}
              >
                <h1>S </h1>
              </Days>
            </DaysDiv>

            <Options>
              <p data-test="habit-create-cancel-btn" onClick={esconderAddCard}>
                Cancelar
              </p>
              <Salvar>
                <p data-test="habit-create-save-btn" onClick={saveHabit}>
                  Salvar
                </p>
              </Salvar>
            </Options>
          </CardHabitsDay>

          <TextHabitsTela>
            <h1>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </h1>
          </TextHabitsTela>
        </>
      );
    }
  };

  const esconderAddCard = () => {
    setShowAddHabitComponent(false);
  };

  function saveHabit() {
    dadosHabits.days = array.map(function (str) {
      return parseInt(str);
    });

    const promise = axios.post(`${Base_URL}/habits`, dadosHabits, {
      headers: { Authorization: "Bearer " + user.token },
    });

    promise.then((res) => {
      setEnviarHabit(res.data);
      // esconderAddCard();
      navigate("/habitos");
      // setShowDayHabit(true);
    });

    promise.catch((err) => {
      //setDisabled(false);
      alert(err.response.data.message);
    });
  }

  return (
    <>
      {habitsRegistered()}
      {addHabits()}
    </>
  );
}

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

const InputHabits = styled.div`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  margin-left: 19px;
  margin-top: 18px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  input {
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
  }
  placeholder {
    width: 58px;
    height: 25px;
    left: 47px;
    top: 339px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;
const Options = styled.div`
  width: 176px;
  height: 45px;
  margin-top: 29px;
  margin-left: 148px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
  }
`;
const Salvar = styled.div`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

const DivHabits = styled.div`
  width: 375px;
  height: 77px;
  background: #e5e5e5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const AddHabitss = styled.div`
width: 40px;
height: 35px;
margin-right:18px;
border-radius: 4.63636px;
background: "#52B6FF;
display: flex;
justify-content: center;
align-items: center;
p{
    width: 16px;
    height: 34px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
}
`;
const TextHabits = styled.label`
  margin-left: 17px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: ${NavBarColor};
`;

const HabitsDay = styled.div`
  width: 303px;
  height: 25px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
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
  justify-content: center;
`;
const TextHabitsTela = styled.div`
  width: 375px;
  background: #e5e5e5;
  h1 {
    width: 338px;
    height: 74px;
    margin-left: 17px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
