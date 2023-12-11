const express = require('express');
const router = express.Router();
const conn = require('../services/database');
const connexionService = require('../services/connexion');

router.post('/', async (req, res) => {
    const { connexion } = req.body;
    console.table(connexion);
    console.log('email' + connexion.emailco);
    console.log('email' + connexion.passwordco);

    if(!connexion.emailco || !connexion.passwordco) {
        return res.status(400).json({message : 'veuillez entrer un email et un mot de passe correct'})
    }

    try {
        // Récupérer les informations de l'utilisateur à partir de la base de données
        const user = await connexionService.getUserByEmail(connexion.emailco);
        console.log(connexion.emailco);

        // Vérifier si l'utilisateur existe
        if(!user){
            return res.status(401).json({message : 'Identifiant incorrect'})
        }
        console.log('user '+ user.user_email)
        console.log('password '+ user.user_password)
        // Vérifier si le mot de passe correspond
        if(user.user_password !== connexion.passwordco) {
            
            return res.status(401).json({message : 'Identifiant incorrect'})
        }

         // Si tout est correct, renvoyer une réponse réussie
         res.status(200).json({message : 'Connexion réussie', user: user})
    } catch (e) {
        console.log(e)
        res.status(500).json({message : 'Erreur serveur lors de la vérification des identifiants'})
    }
  });


  module.exports = router;