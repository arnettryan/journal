require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");
let bodyParser = require ("body-parser")
let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller")

sequelize.sync();


app.use(express.json());
app.use(bodyParser.json());



//app.use(require('./middleware/validate-session'));
app.use("/journal", journal);
app.use("/user", user);

app.listen(3000, function() {
    console.log("App is listening on port 3000");
});