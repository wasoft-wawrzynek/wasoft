interface IAppConfig {
    REACT_APP_API_URL: string
}

const config : IAppConfig = (window as { [key: string]: any })['appConfig'];

export default config;