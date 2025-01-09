import axios from "axios";

const axiosCustomInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosCustomInstance;
