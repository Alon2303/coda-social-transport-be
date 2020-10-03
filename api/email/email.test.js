
const emailService = require('./email.service');

describe('sendMail',()=>{
    const testEmailSuccessParams = {
        "emails":["alon.ofir@zohomail.com"],
        "title":"Test email",
        "body":"this is just a test"
    };

    const testEmailFailureParams = {
        "emails":["alon.ofir@zohomail.com"],
        "title":"",
        "body":"this is just a test"
    };
    it('should succeed',async ()=>{
           const emailSuccessResult = await emailService.sendEmails(testEmailSuccessParams);
           expect(emailSuccessResult[0].accepted.length).toEqual(1);
    });

    it('should fail - missing params',async ()=>{
        await expect(emailService.sendEmails(testEmailFailureParams)).rejects.toThrowError(`Missing parameter: email, title, or body`);
    });
});
