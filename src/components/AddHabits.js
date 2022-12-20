import styled from "styled-components";
import { NavBarColor } from "../constante/colors";
import { useContext} from "react";
import { AuthContext } from "../components/AuthContext";

export default function AddHabits() {
  
  const { showHabitRegistered, setShowHabitRegistered } =
  useContext(AuthContext);
  const { showAddHabitComponent, setShowAddHabitComponent } =
  useContext(AuthContext);

  const addHabits = () => {
    console.log("tgvbhynjkm")
    setShowHabitRegistered(true)
    setShowAddHabitComponent(true)
   
  };

  return (
    <>
      <DivHabits>
        <TextHabits> Meus hábitos </TextHabits>

        <AddHabitss data-test="habit-create-btn" onClick={addHabits}>
          <p>+</p>
        </AddHabitss>
      </DivHabits>
    </>
  );
}

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
