const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
const Database = require('./data-source.js/db');
const cors = require('cors')
app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204, 
  };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1',router);




const PORT = 8500;

(async () => {
    try {
        await Database.connect();
        console.log('DB Connection Open!');
        app.listen(PORT, () => {
            console.log(`Server started at port :::: ${PORT} `);
        });
    } catch (err) {
        await Database.disconnect();
    }
})();