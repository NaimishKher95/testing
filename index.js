const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const Routes = require('./controller/routes');

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true }, (err, res) => {
    if (err) console.log(err);
    else console.log('success');
})

app.use('/api/v1/auth/', Routes);


server.listen(4001, () => console.log(`Magic happens on port ${4001}`));