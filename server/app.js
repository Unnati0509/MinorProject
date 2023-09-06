const express = require('express');
const app = express();
const PORT = 8500;




app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})