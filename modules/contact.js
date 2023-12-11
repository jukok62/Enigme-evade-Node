const express = require('express');
const router = express.Router();
const conn = require('../services/database');
const contactService= require('../services/contactService');

router.post('/contact', async (req, res) => {
    try {
      await contactService.sendEmailContact(req.body);
      console.log('Formulaire soumis avec succès!');
      res.sendStatus(200);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    }
  });
  
  module.exports = router;