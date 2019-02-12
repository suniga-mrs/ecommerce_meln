//includes
const express = require('express');
const bodyParser = require('body-parser');

// instances
const router = express.Router();

//Schema
const ItemModel = require('../models/Item');

// router.post('/', (req, res) => {
// 	console.log(req.body);
// 	res.send({
// 		type: 'POST',
// 		name: req.body.name,
// 		description: req.body.description,
// 		category: req.body.category,
// 		price: req.body.price
// 	})
// });

router.post('/create', (req, res, next) => {
	ItemModel.create(req.body)
		.then(item => {
			res.send(item)
		}).catch(next)
});

router.put('/:id', (req, res, next) => {
	ItemModel.updateOne({_id: req.params.id}, req.body)
		.then(() => {
			ItemModel.findOne({_id: req.params.id}, req.body)
			.then(item => {
				res.send(item)
			})
		}).catch(next)
});

router.delete('/:id', (req, res, next) => {
	ItemModel.deleteOne({_id: req.params.id})
		.then(item => {
			res.send(item)
		}).catch(next)
});

router.get('/', (req, res, next) => {
	ItemModel.find({})
		.then(item => {
			res.send(item)
		}).catch(next)
});

router.get('/:id', (req, res, next) => {
	ItemModel.find({_id: req.params.id})
		.then(item => {
			res.send(item)
		}).catch(next)
});


module.exports = router;