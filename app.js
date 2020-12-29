const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

const app = express();

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://acc_admin:Canvas@123@cluster0.81nbn.mongodb.net/acc-back?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   client.close();
// });

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DATABASE Connected'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin": "*")
// })

app.use('/', userRoutes);
app.use('/', categoryRoutes);
app.use('/', productRoutes);

if  (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'acc-front', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
