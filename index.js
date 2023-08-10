//require express *********************************************************************************
const express = require('express');
const fruits = require('./models/fruits')

//connects express instance to variable app
const app = express();

//sets engine
app.set('view engine', 'jsx');

//starts engine
app.engine('jsx', require('express-react-views').createEngine());

//set port
const PORT = 3000;


//middleware *************************************************************************************
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));




//routes ******************************************************************************************
app.get('/',(req,res)=>{
    res.render("Index", {fruit:fruits})
})

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits'); //send the user back to /fruits
});

app.get('/fruits', (req,res)=>{
    res.send(fruits)
})

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.get('/fruits/:indexOfFruitsArray',(req,res)=>{
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})

//sets server and displays message if working **********************************************************
app.listen(PORT,(req, res)=>{
    console.log(`server is now listening on port ${PORT}`);
})