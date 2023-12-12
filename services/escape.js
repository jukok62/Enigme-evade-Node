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

module.exports = {
    fetchEscapeSite,
    fetchEscapeDomicile,
    fetchEscapeSiteById,
    fetchEscapeDomicileById
}