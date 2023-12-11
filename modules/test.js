const express = require("express");
const router = express.Router();
const conn = require ("../services/database");
const test = require ("../services/test")

router.get("/:email", async (req, res) =>{
    test.fetchUserByEmail(req.params.email).then(result =>{
        res.status(200)
        res.json(result[0]);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

module.exports = router;