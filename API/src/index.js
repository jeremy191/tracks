require('./models/User'); // So it can run only once
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth'); // middleware
const trackRoutes = require('./routes/track');
const app = express();

app.use(bodyParser.json()); // parse the data into json
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = '';
mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
	console.log('connected to mongo');
});
mongoose.connection.on('error', (err) => {
	console.error('Conecting to mongo [ERROR]: ', err);
});
app.get('/', requireAuth, (req, res) => {
	res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
