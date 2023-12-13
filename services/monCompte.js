const conn = require('./database');

const addModification = (modification) => {
    return new Promise ((resolve,reject) => {
        let sql = `UPDATE user
        SET user_nom = '${modification.user_nom}', user_prenom = '${modification.user_prenom}', user_email = '${modification.user_email}', user_telephone = '${modification.user_telephone}' , user_adresse = '${modification.user_adresse}'
        WHERE user_email = '${modification.user_email}';`
         let query = conn.query(sql, (err, result, field) => {
             if (err) {
                return reject(err);
             }
             resolve(result);
         });
    })
}

const fetchLastRes = (email) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT
        r.*,
        CASE
            WHEN s.salle_id IS NOT NULL THEN s.salle_nom
            WHEN d.domicile_id IS NOT NULL THEN d.dom_nom
            ELSE 'unknown'
        END AS nom_escape,
        CASE
            WHEN s.salle_id IS NOT NULL THEN 'site'
            WHEN d.domicile_id IS NOT NULL THEN 'domicile'
            ELSE 'unknown'
        END AS res_type
    FROM reservation AS r
    LEFT JOIN site AS s ON r.id_salle = s.salle_id
    LEFT JOIN domicile AS d ON r.dom_id = d.domicile_id
    WHERE r.user_email = '${email}'
    ORDER BY r.res_dateHeure DESC
    LIMIT 1;`
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
}

const fetchUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT user_email,user_nom,user_prenom,user_telephone,user_adresse
        FROM user
        WHERE user_email =  ${email}`;
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    addModification,
    fetchUserByEmail,
    fetchLastRes
}