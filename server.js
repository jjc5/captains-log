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

mongoose.connection.once('connected', () => {
  console.log('connected to mongo')
})


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('I run before all routes')
  next()
})
app.use(express.urlencoded({ extended: true }))
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
  res.send('Welcome to the Captains Log')
})
/*Index*/
app.get('/logs', (req, res) => {
  Logs.find({}, (err, createdLogs) =>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else {
      res.render('Index', {
        logs: createdLogs
      })
    }
  })
})

/*New*/
app.get('/logs/new', (req, res) => {
  res.render('New')
})

/*Delete*/
app.delete('/logs/:id', (req, res)=>{
    Logs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');//redirect back to fruits index
    });
});
/*Update*/
app.put('/logs/:id', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog)=>{
        res.redirect('/logs');
    });
});

/*Create*/
app.post('/logs', (req, res) => {
  if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
  }else{
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body, (err, createdLogs) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else{
      console.log(createdLogs);
      res.redirect('/logs')
    }
  })
})
/*Edit*/
app.get('/logs/:id/edit', (req, res) => {
  Logs.findById(req.params.id, (err, editedLog) => {
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        logs: editedLog
      })
    }
  })
})
/*Show*/
app.get('/logs/:id', (req, res) => {
  Logs.findById(req.params.id, (err, createdLogs)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        logs: createdLogs
      })
    }
  })
})

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT)
});
