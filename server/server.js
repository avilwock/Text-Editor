//sets up the server
const express = require('express');
const path = require ('path');

const app = express();
const PORT = process.env.PORT || 3000;

//sets the file to work out of the directory client/dist for all the project
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
