const conn = require("./database")

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT  * FROM user WHERE user_email = ? ;`;
      conn.query(sql, [email], (error, results) => {
        if (error) {
          console.error('Erreur lors de la récupération de l\'utilisateur par email:', error);
          reject(error);
        } else {   
            // results contient les résultats de la requête
          // Si l'utilisateur est trouvé, results contiendra ses informations
          // Sinon, results sera un tableau vide
          resolve(results[0] ? results[0] : null);
    }
});
});
};

module.exports = {
    getUserByEmail
}