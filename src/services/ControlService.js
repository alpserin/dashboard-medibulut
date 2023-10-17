import axios from "axios";

export default {
  getControlList: () => axios.get("http://localhost:3000/controls"),
};
