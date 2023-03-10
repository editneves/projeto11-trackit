import styled from "styled-components";
import { NavBarColor } from "../constante/colors";
import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import { Base_URL } from "../constante/urls";
import { useNavigate } from "react-router-dom";

export default function CreateHabits() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const token = localUser.token;
  const { user, setUser } = useContext(AuthContext);
  const { receberHabit, setReceberHabit } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [dadosHabits, setDadosHabits] = useState({ name: "", days: [] });
  const { enviarHabit, setEnviarHabit } = useContext(AuthContext);
  const { showAddHabitComponent, setShowAddHabitComponent } =
    useContext(AuthContext);
  const { showHabitRegistered, setShowHabitRegistered } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const array = [];

  const daySelect = (event) => {
    if (!array.includes(event.currentTarget.id)) {
      array.push(event.currentTarget.id);
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
      navigate("/habitos");
    });

    promise.catch((err) => {
     
      alert(err.response.data.message);
    });
  }


  console.log(showHabitRegistered, dadosHabits,receberHabit);
  console.log("fvedfer",setReceberHabit);
  
  if (!receberHabit) {
    return (
      <>
        <TextHabits>
          <h1>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h1>
        </TextHabits>
      </>
    );
  }

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
        
      </>
    );
  }

}

const TextHabits = styled.label`
  margin-left: 17px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: ${NavBarColor};
`;
const CardHabitsDay = styled.div`
  width: 340px;
  height: 180px;
  margin-left: 19px;
  background: #ffffff;
  border-radius: 5px;
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
const Days = styled.div`
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
