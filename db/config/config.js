require('../../env');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres"
  },
  production: {
    use_aws: process.env.TEST_PGRDS_CONN,
    pool: {
      idle: 50000,
    },
  },
  ssh: {
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
  },
};

module.exports = config[env];