// Require necessary modules
const express = require('express'); // Import Express.js module
const bodyParser = require('body-parser'); // Import body-parser module

// Create an Express application
const app = express(); 

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Serve static files (e.g., HTML, CSS, client-side JS)
app.use(express.static('public')); // Serve static files from the 'public' directory

// Handle form submission
app.post('/submit-form', (req, res) => {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Log form data to console
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send response to the client
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Define port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start message
});