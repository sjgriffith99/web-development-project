// Import Modules
const express = require('express');
const nodemailer = require('nodemailer');
// Create Express App
const app = express();
// Define Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    // Form submission handling logic goes here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
