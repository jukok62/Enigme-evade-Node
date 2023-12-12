const express = require('express');
const router = express.Router();
const conn = require('../services/database');
const reservationService = require("../services/reservationsite")

router.post('/', (req, res) => {
    let data = req.body;
    console.log(data)
    reservationService.AddReservationSite(data).then(result => {
        res.status(201)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json({"message" : "Votre ajout ne s'est pas bien passé"})
    })
  })


  module.exports = router;