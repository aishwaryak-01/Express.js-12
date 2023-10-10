const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', userRoutes);
sequelize.sync().then(() => { 
app.listen(3000, () => {
console.log('Server is running on http://localhost:3000')})})
.catch(err => console.log(err));
