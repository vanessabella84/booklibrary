const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')
const app = express();


const port = process.env.PORT || 8000;
require('dotenv').config()
connectDB();
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/book', bookRoutes);
app.use('/api/user', userRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));
