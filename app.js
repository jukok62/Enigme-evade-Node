const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const imageAccueil = require("./modules/imageAccueil")
const inscription = require("./modules/inscription")
const connexion = require("./modules/connexion")
const test = require("./modules/test")
const escape = require("./modules/escape");
const imagesDetails = require("./modules/imageDetails");
const contact = require("./modules/contact")
const bodyParser = require('body-parser');
// const { sendEmail } = require('./services/contactService');
const reservationDomicile = require ("./modules/reservationDomicile")
const reservation = require("./modules/reservationmodule")
const nomsite = require("./modules/NomSite")


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
app.use('/', escape);
app.use('/', imagesDetails);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(contact);

// app.post('/submit', async (req, res) => {
//   try {
//     await sendEmail(req.body);
//     console.log('Formulaire soumis avec succès!');
//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Erreur lors de la soumission du formulaire', error);
//     res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
//   }
// });
app.use("/reservationDomicile", reservationDomicile);
app.use("/reservation", reservation);
app.use("/nomsite", nomsite);




app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});

