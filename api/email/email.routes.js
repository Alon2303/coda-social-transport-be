const express = require('express');
const router = express.Router();
const emailService = require('./email.service');

/**
 * Sends an email to a supplier
 * Expects to recieve in the body of the request:
 * @param emails {Array} array of emails > 0
 * @param title {string} title of the email
 * @param body {string}  body of the email
 */
router.post('/send', async (req, res) => {
     try{
          await emailService.sendEmails(req.body);
          res.send({message:`Email/s successfully sent`});
     }catch (error) {
          res.status(500).json({message: error.message, stack: error.stack});
     }
});

module.exports = router;
