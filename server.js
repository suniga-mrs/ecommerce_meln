const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://mich_admin:admin00000000@mongo-project-db-6eyre.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());

const item = require('./routes/api.js');
app.use('/items', item);

app.use( (err, req, res, next) => {
	res.status(422).send({error : err.message})
})

app.listen(5000, () => {
	console.log(`Example app listening on port 5000!`);
});