import styled from "styled-components";
import { NavBarColor } from "../constante/colors";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function NavBar() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const token = localUser.token;
  const { user } = useContext(AuthContext);

  return (
    <>
      <Topo data-test="header">
        <TextTopo> TrackIt </TextTopo>
        <UserImg src={user.image} />
      </Topo>
    </>
  );
}

const Topo = styled.div`
  width: 375px;
  height: 70px;
  margin-left: 0px;
  margin-top: 0px;
  background: ${NavBarColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TextTopo = styled.label`
  width: 97px;
  height: 49px;
  margin-left: 18px;
  margin-top: 10px;
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
`;

const UserImg = styled.img`
  width: 51px;
  height: 51px;
  margin-right: 18px;
  margin-top: 9px;
  background: url(image.png);
  border-radius: 98.5px;
`;
