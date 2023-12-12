const conn = require ("./database");

const fetchImageDetailsSalle = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT image_nom FROM escapegame.image
        WHERE salle_id = ${id}; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

const fetchImageDetailsDomicile = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT image_nom FROM escapegame.image
        WHERE domicile_id = ${id}; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    fetchImageDetailsSalle,
    fetchImageDetailsDomicile
}