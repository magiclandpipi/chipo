import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(""); // To display success or error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs
            .sendForm("service_2t0tpbp", "template_e8ybgkg", e.target, "kgkS4N-oWh0hB_29N")
            .then(
                (result) => {
                    setStatus("Message sent successfully! We will get back to you soon.");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Oops! Something went wrong. Please try again.");
                }
            );
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" type="submit">
                    Send Message
                </Button>
            </form>
            {status && <Typography mt={2} color="primary">{status}</Typography>}
        </Box>
    );
};

export default ContactPage;
