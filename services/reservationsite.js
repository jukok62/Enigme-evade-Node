const conn = require("./database");
const { format } = require('date-fns');

const AddReservationSite = (resSite) => {
    return new Promise((resolve, reject) => {
        const formattedDate = format(new Date(resSite.date), 'yyyy-MM-dd HH:mm:ss');
        let sql = `INSERT INTO reservation (res_type, res_dateHeure, res_nbPersonne, res_niveau, user_email, id_salle, res_nom,res_prenom, res_numero, res_montant) VALUES 
       ('${resSite.res_type}','${formattedDate}','${resSite.res_nbPersonne}','${resSite.res_niveau}','${resSite.user_email}','${resSite.id_salle}','${resSite.res_nom}','${resSite.res_prenom}','${resSite.res_numero}','${resSite.res_montant}')`
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};


module.exports = {
    AddReservationSite
}