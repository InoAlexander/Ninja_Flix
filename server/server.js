const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//must set up access to data
require('./config/mongoose.config');

//routes
require('./routes/movie.routes')(app);

app.listen(port, () => console.log("Port Connected"))