//import mongoose for data modelling
const mongoose = require('mongoose');


const Schema = mongoose.Schema; //For creating new Schema

const ItemSchema = new Schema({
	name: {
		type: String, 
		required: [true, 'Name field is required']
	},
	description: {
		type: String, 
		required: [true, 'Description field is required']
	},
	category: {
		type: String, 
		required: [true, 'Category field is required']
	},
	price: {
		type: Number, 
		required: [true, 'Price field is required']
	}
});


//set-up dev models and export it to the main app

module.exports = mongoose.model('Item', ItemSchema);