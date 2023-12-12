const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'node.escape.game@gmail.com',
    pass: 'vnzo lhse owol pksd',
  },
});

const sendEmaildevis = (formData) => {
  const { nom_devis, prenom_devis, email_devis, tel_devis, message_devis } = formData;

  const mailOptions = {
    from: email_devis,
    to: 'node.escape.game@gmail.com',
    subject: 'Nouveau formulaire de devis soumis',
    text: `Nom: ${nom_devis}\nPrénom: ${prenom_devis}\nE-mail: ${email_devis}\nTéléphone: ${tel_devis}\nMessage: ${message_devis}\n`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

const sendEmailDevis = (formData) => {
  const { escape_devis, difficulte_devis, nom_devis, prenom_devis, email_devis, lieu_devis, tel_devis, date_devis } = formData;

  const mailOptions = {
    from: email_devis,
    to: 'node.escape.game@gmail.com',
    subject: 'Nouveau formulaire de devis soumis',
    text: `Escape choisi: ${escape_devis}\nDifficulé: ${difficulte_devis} \nNom: ${nom_devis}\nPrénom: ${prenom_devis}\nE-mail: ${email_devis}\nLieu: ${lieu_devis}\nTéléphone: ${tel_devis}\nDate: ${date_devis}\n`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = {
  sendEmaildevis,
  sendEmailDevis
};