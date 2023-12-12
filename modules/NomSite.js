const express = require ("express");
const router = express.Router();
const conn = require ("../services/database");
const NomSite = require("../services/sitenom");


router.get("/", async (req,res) => {
    NomSite.fetchNomSite()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.error("oops" , err);
        res.json({"message ": "error" + err.sqlMessage});
    })
})



module.exports = router;