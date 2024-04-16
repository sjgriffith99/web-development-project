// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, client-side JS)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Here, you can do whatever you want with the form data,
    // like saving it to a database, sending it via email, etc.
    // For now, let's just log it to the console.
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Respond to the client
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});