const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const databaseUrl = process.env.DATABASE_URL || 'mongodb+srv://mich_admin:admin00000000@mongo-project-db-6eyre.mongodb.net/test?retryWrites=true';

mongoose.connect(databaseUrl, {useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
	console.log('Remote Database Connection Established');
})

const app = express();

app.use(bodyParser.json());

const item = require('./routes/api.js');
app.use('/items', item);

app.use( (err, req, res, next) => {
	res.status(422).send({error : err.message})
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});