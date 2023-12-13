const express = require("express");
const router = express.Router();
const conn = require("../services/database");
const Tableau = require("../services/tableauSite");

// router.get("/", async (req,res) => {
//     Tableau.fectTableauSite()
//     .then(result => {
//         res.status(200).json(result);
//     })
//     .catch(err => {
//         console.error("oops" , err);
//         res.json({"message ": "error" + err.sqlMessage});
//     })
// })

router.get("/:email", async (req,res) => {
    Tableau.fecthTableauSiteByEmail(req.params.email)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.error("oops" , err);
        res.json({"message ": "error" + err.sqlMessage});
    })
})

// router.get("/tableaudomicile", async (req,res) => {
//     Tableau.fectTableauDomicile()
//     .then(result => {
//         res.status(200).json(result);
//     })
//     .catch(err => {
//         console.error("oops" , err);
//         res.json({"message ": "error" + err.sqlMessage});
//     })
// })

router.get("/tableaudomicile/:email", async (req,res) => {
    Tableau.fecthTableauDomicileByEmail(req.params.email)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.error("oops" , err);
        res.json({"message ": "error" + err.sqlMessage});
    })
})

module.exports = router;