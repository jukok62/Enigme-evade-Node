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

const fecthTableauSiteByEmail = (email)=>{
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM reservation AS r
        JOIN site AS s ON r.id_salle = s.salle_id
        WHERE r.user_email = '${email}'
        ORDER BY r.res_id DESC`;
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

const fecthTableauDomicileByEmail = (email)=>{
    return new Promise((resolve, reject) => {
        let sql = `SELECT r.*, d.dom_nom
        FROM reservation AS r
        JOIN domicile AS d ON r.dom_id = d.domicile_id
        WHERE r.user_email = '${email}'
        ORDER BY r.res_id DESC`;
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
    fectTableauDomicile,
    fecthTableauSiteByEmail,
    fecthTableauDomicileByEmail
}