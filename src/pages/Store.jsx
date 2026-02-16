import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import cake1 from "../assets/cake1.jpeg";
import cake2 from "../assets/cake2.jpeg";
import cake4 from "../assets/cake4.jpeg";
import cake5 from "../assets/cake5.jpeg";
import cake7 from "../assets/cake7.jpeg";
import cake8 from "../assets/cake8.jpeg";
import cake9 from "../assets/cake9.jpeg";
import cake10 from "../assets/cake10.jpeg";
import cake11 from "../assets/cake11.jpeg";
import cake12 from "../assets/cake12.jpeg";

const products = [
  { name: "Inspiration Cake", price: "€60.00", image: cake1, category: "cake" },
  { name: "Inspiration Cake", price: "€60.00", image: cake2, category: "cake" },
  { name: "Inspiration Cake", price: "€50.00", image: cake8, category: "cake" },
  { name: "Inspiration Cake", price: "€79.00", image: cake5, category: "cake" },
  { name: "Inspiration Cake", price: "€89.50", image: cake7, category: "cake" },
  { name: "Inspiration Cake", price: "€49.50", image: cake10, category: "cake" },
  { name: "Inspiration Cake", price: "€39.50", image: cake9, category: "cake" },
  { name: "Inspiration Cake", price: "€49.50", image: cake8, category: "cake" },
  { name: "Inspiration Cake", price: "€59.50", image: cake4, category: "cake" },
  { name: "Inspiration  Cake", price: "€59.50", image: cake11, category: "cake" },
  { name: "Inspiration Cake", price: "€38.50", image: cake12, category: "cake" },
];

export default function Store() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, pb: "calc(70px + 1rem)" }}>
      {/* Filter controls */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
          justifyContent: "center",
        }}
      >
        <TextField
          label="Search cakes by name..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        {["all", "cupcake", "cake"].map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "contained" : "outlined"}
            onClick={() => setCategory(cat)}
            sx={{ textTransform: "capitalize" }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Product grid */}
      <Typography variant="h4" textAlign="center" mb={3}>
        Cakes
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 3,
        }}
      >
        {filteredProducts.map((product) => (
          <Box
            key={product.name}
            sx={{
              border: "1px solid #f7f7f7",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)", boxShadow: 5 },
              backgroundColor: "#fff",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography fontWeight="bold">{product.name}</Typography>
                <Typography>{product.price}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 1, textTransform: "none" }}
                >
                  Buy Now!
                </Button>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
