const conn = require ("./database");

const fetchImageAccueil = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT MAX(image_id) AS image_id, MAX(image_nom) AS image_nom, salle_id, domicile_id
        FROM image 
        GROUP BY salle_id, domicile_id LIMIT 8; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    fetchImageAccueil
}