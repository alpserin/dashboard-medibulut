import axios from "axios";

export default {
  getAnnouncements: () => axios.get("http://localhost:3000/announcements"),
};
