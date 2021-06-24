require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Logs = require('./models/logs');

/***Database setup***/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('I run before all routes')
  next()
})
app.use(express.urlencoded({ extended: true }))



/*Index*/
/*New*/
app.get('/logs/new', (req, res) => {
  res.render('New')
})

/*Delete*/
/*Update*/
/*Create*/
app.post('/logs', (req, res) => {
  if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
  }else{
    req.body.shipIsBroken = false;
  }
  res.send(req.body);
})
/*Edit*/
/*Show*/

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT)
});
