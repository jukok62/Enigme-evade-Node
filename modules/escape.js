const express = require('express');
const router = express.Router();
const conn = require('../services/database');
const escapeService = require('../services/escape');
const imageDetailsService = require('../services/imageDetails');

router.get('/site', async (req, res) => {
    try {
      const escapeSite = await escapeService.fetchEscapeSite();
      res.send(escapeSite);
    } catch (error) {
      console.error('Erreur lors de la récupération des sites', error);
      res.status(500).send('Erreur lors de la récupération des sites');
    }
  });

  // router.get('/site/:id', async (req, res) => {
  //  escapeService.fetchEscapeSiteById(req.params.id).then(result =>{
  //     res.status(200)
  //     res.json(result);
  // }).catch(err =>{
  //     console.error("Oopsi...", err);
  //     res.json({"Message" : "Error" + err.sqlMessage})
  // })
  // });

  router.get('/site/:id', async (req, res) => {
    try {
      const escapeSiteResult = await escapeService.fetchEscapeSiteById(req.params.id);
      const imageDetailsResult = await imageDetailsService.fetchImageDetailsSalle(req.params.id);
  
      res.status(200).json({
        escapeSite: escapeSiteResult,
        imageDetails: imageDetailsResult
      });
    } catch (err) {
      console.error("Oopsi...", err);
      res.status(500).json({ "Message": "Error " + err.message });
    }
  })

  router.put('/site/:id', async (req, res) => {
    let data = req.body;
    console.log('Received data:', data);

    try {
        const escapeSite = await escapeService.updateEscapeSite(data);
        res.send(escapeSite);
    } catch (error) {
        console.error('Erreur lors de la mise à jour des sites', error);
        res.status(500).send('Erreur lors de la mise à jour des sites');
    }
});
  router.get('/domicile', async (req, res) => {
    try {
      const escapeSite = await escapeService.fetchEscapeDomicile();
      res.send(escapeSite);
    } catch (error) {
      console.error('Erreur lors de la récupération des sites', error);
      res.status(500).send('Erreur lors de la récupération des sites');
    }
  });

  router.get('/domicile/:id', async (req, res) => {
    try {
      const escapeDomResult = await escapeService.fetchEscapeDomicileById(req.params.id);
      const imageDomResult = await imageDetailsService.fetchImageDetailsDomicile(req.params.id);
  
      res.status(200).json({
        escapeSite: escapeDomResult,
        imageDetails: imageDomResult
      });
    } catch (err) {
      console.error("Oopsi...", err);
      res.status(500).json({ "Message": "Error " + err.message });
    }
   });

   router.put('/domicile/:id', async (req, res) => {
    let data = req.body;
    console.log('Received data:', data);

    try {
        const escapeDom = await escapeService.updateEscapeDomicile(data);
        res.send(escapeDom);
    } catch (error) {
        console.error('Erreur lors de la mise à jour des sites', error);
        res.status(500).send('Erreur lors de la mise à jour des sites');
    }
});
  


  module.exports = router;