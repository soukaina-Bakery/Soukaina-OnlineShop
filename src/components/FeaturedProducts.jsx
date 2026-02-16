import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import weddingCake from "../assets/wedding cake.jpg";
import torte1 from "../assets/torte1.jpg";


const products = [
  { title: "Wedding Cake", price: "€250.00", image: weddingCake },
  { title: "Shape Cake", price: "€45.00", image: torte1 },
];

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((prod, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={prod.image}
                alt={prod.title}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{prod.title}</Typography>
                <Typography>{prod.price}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClick}
                  sx={{ mt: 2 }}
                >
                  Buy Now!
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
