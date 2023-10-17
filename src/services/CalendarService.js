import axios from "axios";

export default {
  getCalendar: () => axios.get("http://localhost:3000/calendar"),
};
