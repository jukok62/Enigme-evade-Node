const conn = require('./database');

const newResaDom = (resaDom) => {
    return new Promise ((resolve,reject) => {
        let sql = `INSERT INTO reservation (res_type, res_dateHeure, res_nbPersonne, res_montant, user_email, dom_id, res_niveau, res_lieu, res_nom, res_prenom, res_numero) VALUES ('${resaDom.res_type}','${resaDom.date}', '${resaDom.nbJoueur}','${resaDom.montant}', '${resaDom.email}',
        '${resaDom.dom_id}', '${resaDom.difficulte}', '${resaDom.lieu}', '${resaDom.nom}','${resaDom.prenom}','${resaDom.numero}');`
         let query = conn.query(sql, (err, result, field) => {
             if (err) {
                return reject(err);
             }
             resolve(result);
         });
    })
}

const salleDom = () => {
    return new Promise ((resolve,reject) => {
        let sql = `SELECT d.domicile_id, d.dom_nom , r.dom_id
        FROM domicile d
        LEFT JOIN reservation r ON r.dom_id = d.domicile_id`
         let query = conn.query(sql, (err, result, field) => {
             if (err) {
                return reject(err);
             }
             resolve(result);
         });
    })
}

module.exports = {
    newResaDom,
    salleDom
}