const conn = require ("./database");


const fetchNomSite = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT s.salle_nom, s.salle_id , r.id_salle
        FROM site s
        LEFT JOIN reservation r ON r.id_salle = s.salle_id
        GROUP BY s.salle_nom, s.salle_id , r.id_salle`;
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};


module.exports = {
    fetchNomSite
}