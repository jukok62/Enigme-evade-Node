const conn = require("./database");

const AddReservationSite = (resSite) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO reservation (res_type, res_dateHeure, res_nbPersonne, res_niveau, user_email, id_salle, res_nom,res_prenom, res_numero, res_montant) VALUES 
       ('${resSite.res_type}','${resSite.res_dateHeure}','${resSite.res_nbPersonne}','${resSite.res_niveau}','${resSite.user_email}','${resSite.salle_id}','${resSite.res_nom}','${resSite.res_prenom}','${resSite.res_numero}','${resSite.res_montant}')`
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};


module.exports = {
    AddReservationSite
}