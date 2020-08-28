const express = require('express');
const app = express();
var cors = require('cors');
const connectDB = require('./config/db');


app.use(cors());
connectDB();


app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('This api is for Flutter bootcamp 2020 '));

app.use('/api/house', require('./api/houses'));
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server starts on  ${PORT}`));