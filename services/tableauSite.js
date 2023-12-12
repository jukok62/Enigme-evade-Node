const conn = require("./database");

const fectTableauSite = ()=>{
    return new Promise((resolve, reject) => {
        let sql = `SELECT res_dateHeure,res_nbPersonne,user_email,res_niveau,id_salle
        FROM reservation 
        WHERE res_type = "site"`;
        let query = conn.query(sql, (err, result, fields)=>{
            if (err){
                return reject(err);
            } 
            resolve(result);
        });
    });
};

const fectTableauDomicile = ()=>{
    return new Promise((resolve, reject) => {
        let sql = `SELECT res_dateHeure,res_nbPersonne,user_email,res_niveau,id_salle
        FROM reservation 
        WHERE res_type = "domicile"`;
        let query = conn.query(sql, (err, result, fields)=>{
            if (err){
                return reject(err);
            } 
            resolve(result);
        });
    });
};

module.exports = {
    fectTableauSite,
    fectTableauDomicile
}