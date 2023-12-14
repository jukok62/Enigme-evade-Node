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

router.get('/', async (req, res) => {
    try {
      const reservations = await test.fetchAllResa();
      const formattedReservations = reservations.map(row => {
        return {
          res_dateHeure: row.res_dateHeure.toISOString(),
        };
      });
      console.log(formattedReservations);
      // Send the response as JSON
      res.json(formattedReservations);
    } catch (error) {
      console.error('Error fetching reservation dates:', error);
      // Send an error response if there's an issue
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;