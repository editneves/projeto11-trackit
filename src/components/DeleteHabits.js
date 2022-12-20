import axios from "axios";
import { Base_URL } from "../constante/urls";


function DeleteHabits(e) {
  const headers = {
    Authorization: "Bearer " + user.token,
    "My-Custom-Header": "foobar",
  };
  axios
    .delete(`${Base_URL}/habits/${idDelete}`, { headers })
    .then(() => setStatus("Delete successful"));
}
