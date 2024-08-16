const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');


app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
