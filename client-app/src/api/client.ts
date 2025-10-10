import axios from "axios";
import IContactFormData from "./models/IContactFormData";

console.log("Testing ep. I:", process.env.REACT_APP_API_BASE_URL);
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const Contact = {
  sendContactForm: async (form: IContactFormData): Promise<boolean> => {
    return axios
      .post("/api/contact", form)
      .then(() => true)
      .catch(() => false);
  },
};

const client = {
  Contact,
};

export default client;
