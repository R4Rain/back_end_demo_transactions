const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();
const initialData = require('./config/initialData');

// CORS config
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

// API ROUTER
const TransactionRouter = require('./routes/TransactionRoute');
app.use(TransactionRouter);

// SERVER RUN on PORT (5000)
app.listen(PORT, async () => {
    console.log('Server running...');
    // consume viewData.json to create initial data
    // this command run every time the server restart
    await initialData.insertInitialData();
})