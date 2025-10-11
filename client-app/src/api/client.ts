import axios from "axios";
import IContactFormData from "./models/IContactFormData";
import appConfig from "../config/appConfig";

axios.defaults.baseURL = appConfig.API_URL;

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
