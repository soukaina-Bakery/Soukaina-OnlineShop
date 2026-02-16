import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

import contactIcon from "../assets/contact.jpeg";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.avif";
import whatsappIcon from "../assets/whatsapp.jpeg";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#f7f7f7",
        p: 2,
        boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
        mt: "auto", // pushes footer to bottom if content is short
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
          mb: 1,
        }}
      >
        {/* Left side - Contact */}
        <Link
          href="/contact"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.05)", color: "#2fba4d" },
          }}
        >
          <Box
            component="img"
            src={contactIcon}
            alt="Contact"
            sx={{ width: 30, height: 30, borderRadius: 1 }}
          />
          <Typography variant="body2" color="text.primary">
            Contact
          </Typography>
        </Link>

        {/* Right side - Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          {[
            { href: "https://www.facebook.com/soukaina.janati.1", src: facebookIcon, label: "Facebook" },
            { href: "https://www.instagram.com/frostedbysoukaina/", src: instagramIcon, label: "Instagram" },
            { href: "https://wa.me/1234567890", src: whatsappIcon, label: "WhatsApp" },
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                transition: "transform 0.2s, color 0.2s",
                "&:hover": { transform: "scale(1.1)", color: "#2fba4d" },
              }}
            >
              <Box
                component="img"
                src={social.src}
                alt={social.label}
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  p: 0.5,
                  bgcolor: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              />
              <Typography variant="caption" color="text.primary">
                {social.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ textAlign: "center" }}>
        &copy; 2026 Soukaina Cakery
      </Typography>
    </Box>
  );
}
