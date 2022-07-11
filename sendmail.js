var nodemailer = require('nodemailer');
var sender = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ppasu18@gmail.com',
        pass:'ckqefspplrifqlhl'
    }
});
var composemail = {
    from : 'ppasu18@gmail.com',
    to : 'pasuanan23@gmail.com',
    subject : "send example",
    html : '<h1>Hello World!</h1>'
};

sender.sendMail(composemail,function(error,info){
    if(error){
        console.log(error);
    }
    else{
    console.log('mail sent Successfully'+info.response);
    }
});