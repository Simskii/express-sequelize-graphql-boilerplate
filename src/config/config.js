const devConfig = {
    SQL_URL: 'postgres://postgres:mysecretpassword123@postgres:5432/postgres',
};

const testConfig = {
    SQL_URL: 'mssql://votigo_app:SuperAdmin@127.0.0.1/Votigo',
};

const prodConfig = {
    SQL_URL: process.env.SQL_URL,
    JWT_SECRET: process.env.JWT_SECRET,
};

const defaultConfig = {
    JWT_SECRET: process.env.JWT_SECRET || 'NIMscUiP1YTX9jGnySL5oRzBmeJuLRp5',
    PORT: process.env.PORT || 80,
    GRAPHQL_PATH: '/graphql',
};

function envConfig(env) {
    switch (env) {
    case 'test':
        return testConfig;
    case 'production':
        return prodConfig;
    default:
        return devConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};
