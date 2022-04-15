import axios from "axios";
import IContactFormData from "./models/IContactFormData";
import appConfig from "../appConfig";

axios.defaults.baseURL = appConfig.REACT_APP_API_URL;

const Contact = {
  sendContactForm: async (form: IContactFormData): Promise<boolean> => {
    return axios
      .post("/api/contactForm", form)
      .then(() => true)
      .catch(() => false);
  },
};

const client = {
  Contact,
};

export default client;
