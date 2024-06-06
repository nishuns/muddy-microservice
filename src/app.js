const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
// const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
// connectDB();

const app = express();

// Built-in middleware for parsing application/json
app.use(express.json());

// Built-in middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));    

app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
