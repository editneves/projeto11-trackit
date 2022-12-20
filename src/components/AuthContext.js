import { createContext } from "react";

const localUser = JSON.parse(localStorage.getItem("user"));
const token = localUser.token;
export const AuthContext = createContext({
    user: {},
    setUser: () => {},
    showhTreeDots:(false), 
    setShowhTreeDots: () => {},
    enviarHabit: {},
    setEnviarHabit: () => {},
    showAddHabitComponent: false,
    setShowAddHabitComponent: () => {},
    showDayHabit: false, 
    setShowDayHabit: () => {},
    receberHabit: false,
    setReceberHabit: () => {},
    showHabitRegistered: false,
    setShowHabitRegistered: () => {},
    localUser,
    token,

})
