const express = require('express');
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
app.use(express.urlencoded())

// Home Route
// app.get('/product/:id/:id1', (req, res) => {
//   var id = req.params.id
//   var id1 = req.params.id1
//   res.send('Hello World!' + id + id1);
// });

app.get('/homepage',(req,res) => {
  res.render('home',{mya:'Akash'})
})

app.get('/sum',(req,res) => {
  res.sendFile(__dirname+"/sum.html")
});

app.get('/sumprocess',(req,res)=> {
  var a = req.query.txt1
  var b = req.query.txt2
  var c = parseInt(a) + parseInt(b)
  res.send(`value of a is ${c}`)
})

// About Page
app.get('/about', (req, res) => {
  res.sendFile(__dirname+"/about.html")
});

// Home Page (duplicate of root - optional)
app.get('/home', (req, res) => {
    res.sendFile(__dirname+"/home.html")

});

// Contact Page (correct the typo from 'contect')
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+"/contact.html")
});

app.get('/makesheet',(req,res)=>{
  res.render('marksheet')
})
app.post('/marksheetprocess',(req,res) => {
console.log('unformetion')
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});


