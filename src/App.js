import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//import LoginPage from "./pages/LoginPage/LoginPage"
//import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
//import HabitsPage from "./pages/HabitsPage/HabitsPage"
//import TodayPage from "./pages/TodayPage/TodayPage"
import HistoricPage from "./pages/HistoricPage/HistoricPage"

export default function App() {
  // const [inputValue, setInputValue] = useState("#000000");
  return (
    // setInputValue={setInputValue}
    <BrowserRouter>
      <Container>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> 
         {/* <Route path="/Registration" element={<RegistrationPage/>} />*/}
          {/*<Route path="/" element={<TodayPage />} />
          {/* <Route path="/" element={<HabitsPage />} />*/}
          <Route path="/" element={<HistoricPage />} /> 
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: space-between;
background: #E5E5E5;
`