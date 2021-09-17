const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes/index');

const db = require('./config/db/index');
//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));  

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP overwrite form default submit
app.use(methodOverride('_method'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses/views'));

//Route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})