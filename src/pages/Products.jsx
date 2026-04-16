import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import localProducts from "../data/products";
import { fetchProducts } from "../api/shopApi";

function Products() {
  const [products, setProducts] = useState(localProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const backendProducts = await fetchProducts();
        if (Array.isArray(backendProducts) && backendProducts.length > 0) {
          setProducts(backendProducts);
        }
      } catch {
        setError("Unable to load products from backend. Using local catalog.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Featured Products
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;