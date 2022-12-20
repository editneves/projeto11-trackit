import styled from "styled-components";
import { buttonColor } from "../constante/colors";
//import { CircularProgressbar } from "react-circular-progressbar";

import { Link } from "react-router-dom";

export default function Menu() {

  return (
    <>
      <MenuDiv data-test="menu">

      <Link
          style={{ textDecoration: "none", color: " #52b6ff" }}
          to={"/habitos"}
        >
        <p data-test="habit-link">
          Hábitos
        </p>
        </Link>

        <Link
          style={{ textDecoration: "none", color: " #52b6ff" }}
          to={"/hoje"}
        >
          <Hoje data-test="today">
            Hoje
          </Hoje>
        </Link>

        <Link
          style={{ textDecoration: "none", color: " #52b6ff" }}
          to={"/historico"}
        >
          <p data-test="history-link"> Histórico</p>
        </Link>

      </MenuDiv>
    </>
  );
}

// {
//   /* <div style={{ width: 200, height: 200 }}>
//   <CircularProgressbar value={66} />
// </div> */
// }
const MenuDiv = styled.div`
  margin-top: 0px;
  width: 375px;
  height: 70px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;
const Hoje = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
  border-radius: 45px;
  background: ${buttonColor};
  marging-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #ffffff;
`;
