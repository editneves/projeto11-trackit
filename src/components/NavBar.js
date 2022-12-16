import styled from "styled-components"
import { NavBarColor } from "../constants/colors"
import cat from "../images/411.jpg"

export default function NavBar() {
    
    return (
        <>
            <Topo>
                <TextTopo> TrackIt </TextTopo>
                <UserImg src={cat} alt="User" />
            </Topo>


            <DivHabits>
                <TextHabits> Meus hábitos </TextHabits>
                <AddHabits> <p>+</p> </AddHabits>
            </DivHabits>
        </>
    )
}
//<Img src={"https://http.cat/411.jpg"} alt="logo" />
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
`
const TextTopo = styled.label`
width: 97px;
height: 49px;
margin-left: 18px;
margin-top: 10px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
`;

const UserImg = styled.img`
width: 51px;
height: 51px;
margin-right: 18px;
margin-top: 9px;
background: url(image.png);
border-radius: 98.5px;
`;




const DivHabits = styled.div`
width: 375px;
height: 77px;
background: #E5E5E5;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const AddHabits = styled.div`
width: 40px;
height: 35px;
margin-right:18px;
border-radius: 4.63636px;
background: ${"#52B6FF"};
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
    color: #FFFFFF;}
`
const TextHabits = styled.label`
margin-left:17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: ${NavBarColor};
`