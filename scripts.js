const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const api_key = 'c57747aede3603feec0a8d5cf49836b8-ee16bf1a-8516b403'; 
const domain = 'sandbox79c916b5d35145dbbe01fcdf3fe923e4.mailgun.org'; 
const mailgunInstance = mailgun({ apiKey: api_key, domain: domain });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/LowerNav.jsx');
});

app.post('/send-email', (req, res) => {
    const email = req.body.email;

    const mailData = {
        from: 'Vipin <vkingk3@gmail.com>',
        to: email,
        subject: 'Hi, test e-mail ',
        text: 'Hey, welcome to our newsletter',
    };


    
});

app.listen(8000, () => {
    console.log("The Server is running");
});
