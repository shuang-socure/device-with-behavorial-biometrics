const express = require('express')
// const cors = require('cors')

const path = require('path')
const app = express()

// app.use(cors({
//   origin: ['http://localhost:5000', 'http://localhost:3000']
// }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/',  (req, res) => {
  res.render('devicebb');
});


// app.post('https://sandbox.socure.com/api/3.0/EmailAuthScore')

const PORT = 3000;

app.listen(PORT, console.log(`server running on port ${PORT}`));