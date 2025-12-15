const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const tableRoutes = require('./routes/tables');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/tables', tableRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Table API - Jeancarlospp' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
