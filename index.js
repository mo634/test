const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.use(express.json());

app.use('/api', uploadRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
