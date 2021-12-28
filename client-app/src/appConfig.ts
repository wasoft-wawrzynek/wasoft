interface IAppConfig {
    apiUrl: string
}

const config : IAppConfig = (window as { [key: string]: any })['appConfig'];

export default config;