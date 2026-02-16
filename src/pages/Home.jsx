import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import cover from "../assets/cover.jpg";
import logo from "../assets/soukaina1.png";

export default function Home() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100vw",
        minHeight: "calc(100vh - 70px)", // leave space for footer
        pb: "calc(70px + 1rem)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile
          height: { xs: "auto", md: "100vh" }, // auto height on mobile
          width: "100%",
        }}
      >
        {/* Left / Cover */}
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            height: { xs: "300px", md: "100%" }, // smaller height on mobile
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Right / Info */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            backgroundColor: "#f7f7f7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: { xs: 2, md: 4 }, // responsive padding
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "90%", md: "80%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: { xs: "120px", md: "180px" },
                height: { xs: "120px", md: "180px" },
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />

            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "rgb(255, 156, 161)",
                fontSize: { xs: "6vh", md: "8vh" }, // responsive font size
              }}
            >
              Welcome to our Store
            </Typography>

            <Button
              component={Link}
              to="/store"
              sx={{
                backgroundColor: "#2fba4d",
                color: "rgb(59, 58, 58)",
                fontSize: { xs: "16px", md: "18px" },
                padding: { xs: "8px 20px", md: "10px 30px" },
                "&:hover": { backgroundColor: "rgba(71, 209, 186, 0.8)" },
                textTransform: "none",
              }}
            >
              Our Products!
            </Button>
          </Box>
        </Box>
      </Box>

      <FeaturedProducts />
    </Box>
  );
}
