import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, itemCount, updateQuantity, removeFromCart } = useCart();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Card sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6">Your cart is empty.</Typography>
          <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/home")}>Continue Shopping</Button>
        </Card>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography color="text.secondary">₹{item.price}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          label="Quantity"
                          type="number"
                          inputProps={{ min: 1 }}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                          <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                            <DeleteOutlinedIcon />
                          </IconButton>
                          <Typography>₹{item.price * item.quantity}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Items</Typography>
                <Typography>{itemCount}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography>Total</Typography>
                <Typography fontWeight="bold">₹{cartTotal}</Typography>
              </Box>
              <Button variant="contained" size="large" fullWidth onClick={() => navigate("/checkout")}>Checkout</Button>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
