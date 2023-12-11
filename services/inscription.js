const conn = require('./database');

const addInscription = (inscription) => {
    return new Promise ((resolve,reject) => {
        let sql = `INSERT INTO user (user_email, user_nom, user_prenom, user_telephone, user_adresse, user_password) VALUES ('${inscription.email}', '${inscription.nom}', '${inscription.prenom}',
          '${inscription.numero}', '${inscription.adresse}', '${inscription.password}');`
         let query = conn.query(sql, (err, result, field) => {
             if (err) {
                return reject(err);
             }
             resolve(result);
         });
    })
}

module.exports = {
    addInscription
}