const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const imageAccueil = require("./modules/imageAccueil")
const inscription = require("./modules/inscription")
const connexion = require("./modules/connexion")
const test = require("./modules/test")
const reservation = require("./modules/reservationmodule")

app.use(express.json());

app.use(cors({
    origin : "http://localhost:3001",
}));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/imageAccueil", imageAccueil);
app.use("/inscription", inscription)
app.use("/connexion", connexion);
app.use("/test", test);
app.use("/reservation", reservation);

app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});

