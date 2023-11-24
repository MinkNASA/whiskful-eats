const express = require('express');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))

app.set('views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
     res.render('example');
});

app.get('/about', (req, re) => {
      res.render('about');
});

// app.get('/home', (req, re) => {
//     res.render('about');
// });


app.post('/register', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);

    res.send("Thank you. Successfully submitted");
});




// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

app.post('/register', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);

    res.send("Thank you. Successfully submitted");
});





app.listen(3000, () => {
    console.log("Your app is running on port number 3000")
});