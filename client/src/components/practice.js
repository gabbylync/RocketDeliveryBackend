const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there',  from: '+18334542787', to: '+15165100428'})
      .then(message => console.log(message.sid))
      .done();