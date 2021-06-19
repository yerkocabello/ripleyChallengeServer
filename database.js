require('dotenv').config();
const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
//const MONGODB_URI = `${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;
//local:
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true
}).then(db => console.log('Database is connected'))
.catch(err => console.log('err: '+err));