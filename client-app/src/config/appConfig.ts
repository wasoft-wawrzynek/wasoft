interface IAppConfig {
  API_URL: string;
}

const config: IAppConfig = { API_URL: import.meta.env.VITE_API_URL };

export default config;