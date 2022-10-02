const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require("path");

const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn.js');

const PORT = process.env.PORT || 5000;

app.use(express.json());

// / step 3: Heroku 

 

if ( process.env.NODE_ENV == "production"){

  

   

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname,'client','build')));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}

// linking the router files
app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})