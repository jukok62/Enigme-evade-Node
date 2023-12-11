const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'node.escape.game@gmail.com',
    pass: 'vnzo lhse owol pksd',
  },
});

const sendEmailContact = (formData) => {
  const { nom_contact, prenom_contact, email_contact, tel_contact, message_contact } = formData;

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

module.exports = {
  sendEmailContact,
};