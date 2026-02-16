import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/store");
    setMobileOpen(false); // close drawer after search
  };

  const navItems = ["Home", "Store", "About", "Location", "Contact"];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 250, textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "#2fba4d" }}>
        MyStore
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleSearchSubmit} sx={{ textAlign: "center" }}>
            <ListItemText primary="Search" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          color: "#333",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#2fba4d",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Soukaina Bakery
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                sx={{
                  color: "#333",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    color: "#2fba4d",
                    backgroundColor: "rgba(47,186,77,0.1)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
            <IconButton onClick={handleSearchSubmit} color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
