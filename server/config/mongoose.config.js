const mongoose = require('mongoose');
const db_name = "movie-list";

mongoose.connect("mongodb://localhost:27017/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connected to the database: " + db_name))
    .catch((err) => console.log(err, "check your mongoose.config file"));