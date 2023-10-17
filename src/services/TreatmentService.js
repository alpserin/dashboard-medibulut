import axios from "axios";

export default {
  getTreatments: () => axios.get("http://localhost:3000/treatments"),
};
