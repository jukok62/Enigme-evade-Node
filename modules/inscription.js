const expresse = require('express');
const router = expresse.Router();
const conn = require('../services/database')
const inscriptionService = require("../services/inscription")


router.post('/', (req,res) => {
    let data = req.body;
    console.log(data);
    inscriptionService.addInscription(data).then(result => {
        res.status(201);
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json ({"message" : "votre ajout ne c'est pas bien passé"})
    })
})

module.exports = router;