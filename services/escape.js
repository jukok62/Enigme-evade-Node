const conn = require ("./database");

const fetchEscapeSite = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM site; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};



const fetchEscapeSiteById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM escapegame.site
        WHERE salle_id = ${id}; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

const updateEscapeSite = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE escapegame.site
                   SET salle_nom = ?, salle_synopsis = ?, salle_objectif = ?
                   WHERE salle_id = ?`;

        let values = [id.salle_nom, id.salle_synopsis, id.salle_objectif, id.salle_id];

        conn.query(sql, values, (err, result, field) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}

const fetchEscapeDomicile = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM domicile; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

const fetchEscapeDomicileById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM escapegame.domicile
        WHERE domicile_id = ${id}; `
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

const updateEscapeDomicile = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE escapegame.domicile
                   SET dom_nom = ?, dom_synopsis = ?, dom_objectif = ?
                   WHERE domicile_id = ?`;

        let values = [id.dom_nom, id.dom_synopsis, id.dom_objectif, id.domicile_id];

        conn.query(sql, values, (err, result, field) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}


module.exports = {
    fetchEscapeSite,
    fetchEscapeDomicile,
    fetchEscapeSiteById,
    fetchEscapeDomicileById,
    updateEscapeSite,
    updateEscapeDomicile
}