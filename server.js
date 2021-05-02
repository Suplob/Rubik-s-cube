const express = require('express'),
      app = express(),
      PORT = process.env.PORT || 5500,
      ejs = require('ejs');


app.set('view engine', 'ejs');
app.use(express.static('public'));



app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})


app.get('/', (req, res)=>{
    res.render('home', {title:"Rubik's Cube | About"});
})

app.get('/timer', (req, res)=>{
    res.render('timer', {title:"Rubik's Cube | Timer"});
})


app.get('/learn', (req,res)=>{
    res.render('learn', {title:"Rubik's Cube | Learn"});
})
