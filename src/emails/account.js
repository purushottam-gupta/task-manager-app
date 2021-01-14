const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guptapurushottam123@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app `
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guptapurushottam123@gmail.com',
        subject: 'Let Us Know Purpose For Cancelation',
        text: `${name}, We are sorry that we cannot fulfill your needs. Please let us know your concern for leaving`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}