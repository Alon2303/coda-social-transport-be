const {emailCredentials} = require('../../config/dev');
const nodeMailer = require('nodemailer');

// Temporary email template
const buildEmailHtml = (body, email) => {
    return ('<h1>Hello ' + email.name + '</h1>' +
        `${body.replace(/\n/g, "<br />")}<br>`
    );
};


// returns a mail delivery configuration
//TODO: this is not secure, needs to be changed --> preferably to a dedicated mail host
const returnTransporter = () => {
    return nodeMailer.createTransport({
        host: "smtp.gmail.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        auth: {
            user: emailCredentials.emailAddress,
            pass: emailCredentials.userPassword
        }
    });
};

const sendEmails = async (params) => {

    verifyRequest(params); //check variables

    const {emails, body, title} = params.data; //extract the params
    let emailSendingResults;

    for (let email of emails) {
        const attempts = [];
        //create email body
        const emailBody = buildEmailHtml(body, email);

        //mail options
        let mailOptions = {
            from: emailCredentials.emailAddress,
            to: email.email,
            replyTo: emailCredentials.emailAddress,
            subject: title,
            html: emailBody
        };

        attempts.push(returnTransporter().sendMail(mailOptions));
        emailSendingResults = await Promise.all(attempts);

    }
    return emailSendingResults;
};

//Checks that the send email request has all the required parameters
const verifyRequest = params => {
    const {emails, title, body} = params.data;
    if(!emails.length || !title || !body) {
        throw new Error( `Missing parameter: email, title, or body`);
    }
};

module.exports = {sendEmails, verifyRequest};
