const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

/*Index*/
/*New*/
app.get('/logs/new', (req, res) => {
  res.render('New')
})

/*Delete*/
/*Update*/
/*Create*/
/*Edit*/
/*Show*/

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT)
});
