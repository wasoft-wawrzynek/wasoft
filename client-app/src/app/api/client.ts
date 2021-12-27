import axios from "axios";
import IContactFormData from "./models/IContactFormData";
import appConfig from "../../appConfig";

axios.defaults.baseURL = appConfig.apiUrl;

const Contact = {
  sendContactForm: async (form: IContactFormData): Promise<boolean> => {
    return axios
      .post("/api/ContactFormFunction", form)
      .then(() => true)
      .catch(() => false);
  },
};

const client = {
  Contact,
};

export default client;
