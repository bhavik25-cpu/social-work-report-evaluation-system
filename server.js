require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/reports', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
