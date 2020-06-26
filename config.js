var config = {};

config.dbusername = process.env.DB_USERNAME || 'root';
config.dbpassword = process.env.DB_PASSWORD || '';
config.host = process.env.DB_HOST || 'localhost';
config.enviornment = process.env.NODE_ENV || 'development';
config.dbdatabase = process.env.DB_DATABASE || 'jim_beam';
config.dialect = 'mysql';
config.define = {};
config.define.charset = 'utf8';
config.define.collate = 'utf8_general_ci';

config.operatorsAliases = false;

/**
 * Session Configuration
 */
config.session = {};
config.session.secret = process.env.SESSION_SECRET || '9cb7ef704513b9e8dc76113b096375b62409d699';
config.session.name = process.env.SESSION_NAME || '_s';
config.session.resave = false;
config.session.saveUninitialized = true;

module.exports = config;