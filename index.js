const express = require('express');
const app = express();
const port = 8000;

// ROUTER USE
app.use('/', require('./routes/index'));

// SET-UP VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err) {
        console.log(`Error in running the server ${err}`);
    }

    console.log(`Server in running on port ${port}`);
});