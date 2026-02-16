import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import contactus from "../assets/contactus.png";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Async function to send form data
  const sendForm = async (formData) => {
    try {
      const response = await fetch("https://formspree.io/f/mojnwaok", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        return true;
      } else {
        alert("Oops! Something went wrong.");
        return false;
      }
    } catch (error) {
      alert("Oops! Something went wrong.");
      console.error(error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const success = await sendForm(formData);
    if (success) e.target.reset();
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 } }}>
      {/* Banner */}
      <Box className="banner" sx={{ textAlign: "center", my: 4 }}>
        <img
          src={contactus}
          alt="Welcome to our Contact Us page"
        />
        <Typography variant="h3" sx={{ mt: 2 }}>
          Get in Touch With Us
        </Typography>
        <Typography sx={{ mt: 1, fontSize: "1.2rem" }}>
          We're here to answer any questions you may have.
        </Typography>
      </Box>

      {/* Show success message instead of form */}
      {submitted ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
            mx: "auto",
            mb: 4,
            p: 2,
            border: "3px solid #0dac30",
            color: "#0dac30",
            textAlign: "center",
            fontSize: "1.2rem",
            borderRadius: 2,
          }}
        >
          Thank you for your message! We will get back to you soon.
        </Box>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: { xs: "90%", md: "600px" },
            mx: "auto",
            p: 4,
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <TextField fullWidth label="Name" name="name" sx={{ mb: 2 }} required />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            sx={{ mb: 2 }}
            required
          />
          <TextField fullWidth label="Phone" name="phone" sx={{ mb: 2 }} />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            sx={{ mb: 3 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#0dac30",
              "&:hover": { backgroundColor: "#1ac840" },
              display: "block",
              mx: "auto",
              px: 4,
            }}
          >
            Submit
          </Button>
        </Box>
      )}

      {/* Contact Info Section */}
      <Box className="contact-info" sx={{ textAlign: "center", mt: 6, mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Contact Information
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Phone: <Link href="tel:015906810054">015906810054</Link>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Email: <Link href="mailto:Souka.janati@gmail.com">Souka.janati@gmail.com</Link>
        </Typography>
        <Typography>Address: 22089 Wandesbeck Chaussee, Hamburg</Typography>
      </Box>
    </Box>
  );
}
