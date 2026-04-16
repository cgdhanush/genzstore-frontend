import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
        <Stack width="100%">
          <Button variant="contained" size="medium" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
export default ProductCard;
