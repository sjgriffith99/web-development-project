// Import Modules
const express = require('express');
const nodemailer = require('nodemailer');

// Create Express App
const app = express();

// Define Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route for handling form submissions
app.post('/submit-form', (req, res) => {
    // Extract form data from request body
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable for email user
            pass: process.env.EMAIL_PASS // Use environment variable for email password
        }
    });
    
    const mailOptions = {
        from: process.env.EMAIL_USER, // Use environment variable for sender email
        to: process.env.EMAIL_TO, // Use environment variable for recipient email
        subject: 'New Message from Portfolio Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Define PORT
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
