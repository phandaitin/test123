const express = require('express')
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const mongoose  = require('mongoose');
const port = 5000

 

const uri ='mongodb://localhost:27017/db_webpcdaklak1';
mongoose.connect(uri,{  useNewUrlParser: true   });
const myModel =  require('./models/user')


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);app.set('layout','backend');



app.get('/', async (req, res, next ) =>{  
  let data = await myModel.find({})     
  //console.log(data) 
  res.render('./user',{
    data
  })

})



app.listen(port, () => {
  console.log(`Server is running at :${port}`)
})