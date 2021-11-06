
console.log("Server-side code running");

const express = require("express");
const app = express();
const cors = require("cors");
const faker = require("faker");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));
app.use(express.static('./FrontEnd', {index: 'login.html'}));

app.listen(process.env.PORT || port);
app.listen(process.env.PORT);


//import login router
const userLogin = require("./routes/loginRoute");
app.use("/login", userLogin);

//import main router
const mainRouter = require("./routes/mainRoute");
app.use("/main", mainRouter);
