import axios from "axios";

export default {
  getPatientList: () => axios.get("http://localhost:3000/patients"),
};
