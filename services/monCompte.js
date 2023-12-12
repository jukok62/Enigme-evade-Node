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
    fetchUserByEmail
}