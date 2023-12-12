const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'node.escape.game@gmail.com',
    pass: 'vnzo lhse owol pksd',
  },
});

const sendEmailContact = (formData) => {
  const { nom_contact, prenom_contact, email_contact, tel_contact, message_contact} = formData;

  const mailOptions = {
    from: email_contact,
    to: 'node.escape.game@gmail.com',
    subject: 'Nouveau formulaire de contact soumis',
    text: `Nom: ${nom_contact}\nPrénom: ${prenom_contact}\nE-mail: ${email_contact}\nTéléphone: ${tel_contact}\nMessage: ${message_contact}\n`,
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
  sendEmailContact,
  sendEmailDevis
};