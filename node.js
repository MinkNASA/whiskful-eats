const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

app.post('/register', (req, res) => {
    console.log('Name:', req.body.name);
    console.log('Email:', req.body.email);
    console.log('Contact Number:', req.body.contact);

    res.send("Thank you. Successfully registered");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
