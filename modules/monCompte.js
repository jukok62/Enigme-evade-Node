const expresse = require('express');
const router = expresse.Router();
const conn = require('../services/database')
const monCompte = require('../services/monCompte')


router.get("/:email/compte", async (req, res) => {
    monCompte.fetchUserByEmail(req.params.email)
        .then(result => {
            res.status(200).json(result[0]);
        })
        .catch(err => {
            console.error("oops", err);
            res.json({ "message ": "error" + err.sqlMessage });
        })
});

router.get("/:email", async (req, res) => {
    monCompte.fetchLastRes(req.params.email)
    .then(result => {
        res.status(200).json(result[0]);
    })
    .catch(err => {
        console.error("oops", err);
        res.json({ "message ": "error" + err.sqlMessage });
    })
});



router.patch('/:email', (req, res) => {
    let data = req.body;
    console.log(data);
    monCompte.addModification(data).then(result => {
        res.status(201);
        res.json(data);
        console.log('Requête SQL:', result);
    }).catch(err => {
        console.log(err);
        res.status(500).send({ "message": "Votre mise à jour ne s'est pas bien passée" });
    })
})

module.exports = router;