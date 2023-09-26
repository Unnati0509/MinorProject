const dotenv = require('dotenv');

dotenv.config();
const dbUrl = process.env.DB_URL;
const maxPoolSize = process.env.DB_MAX_POOL_SIZE;
const minPoolSize = process.env.DB_MIN_POOL_SIZE;
const selectionTimout = process.env.DB_SELECTION_TIMEOUT;
const port = parseInt(process.env.PORT, 10) || 8080;
module.exports = {
    port,
    dbUrl,
    maxPoolSize,
    minPoolSize,
    selectionTimout,
};