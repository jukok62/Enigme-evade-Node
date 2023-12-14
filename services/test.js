const conn = require ("./database");

const fetchUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM user
        where user_email = ? `
        let query = conn.query(sql, [email], (err, result, field) => {
            if (err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

const fetchAllResa = () => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT res_dateHeure FROM escapegame.reservation`;
      let query = conn.query(sql, (err, result, field) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
  
module.exports = {
    fetchUserByEmail,
    fetchAllResa
}