import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoricPage from "./pages/HistoricPage/HistoricPage"
import {AuthContext}  from "../src/components/AuthContext";

import { useState } from "react";

export default function App() {

  const [user, setUser] = useState({});
  const [showhTreeDots, setShowhTreeDots] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser,showhTreeDots, setShowhTreeDots }}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegistrationPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/historico" element={<HistoricPage />} /> 
          </Routes>
        </Container>
      </BrowserRouter>
      </AuthContext.Provider>
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
background: #FFFFFF;
`