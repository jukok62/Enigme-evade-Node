const expresse = require('express');
const router = expresse.Router();
const conn = require('../services/database')
const reservationDomicile = require ("../services/reservationDomicile")

router.post('/', (req,res) => {
    let data = req.body;
    console.log("date : " + data);
    reservationDomicile.newResaDom(data).then(result => {
        res.status(201);
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json ({"message" : "votre ajout ne c'est pas bien passé"})
    })
})

router.get('/', (req,res) => {
    reservationDomicile.salleDom().then(result => {
        res.status(201);
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.json ({"message" : "votre ajout ne s'est pas bien passé"})
    })
})

module.exports = router;