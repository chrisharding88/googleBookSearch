const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGOD_URI || 'mongodb: //localhost/reactreadinglist');

const seed = [];

db.Book
	.remove({})
	.then(() => db.Book.collection.insertMany(seed))
	.then((data) => {
		console.log(data.result.n + 'book inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
