const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 5000

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'))

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => {
  console.log(port)
})