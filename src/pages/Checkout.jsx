import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { createOrder, processPayment } from "../api/shopApi";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cartItems.length) {
      setError("Your cart is empty. Add items before checkout.");
      return;
    }

    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      await processPayment({
        amount: cartTotal,
        card: {
          name: form.cardName,
          number: form.cardNumber,
          expiry: form.expiry,
          cvv: form.cvv,
        },
      });

      await createOrder({
        customer: {
          name: form.name,
          email: form.email,
          address: form.address,
          city: form.city,
          postal: form.postal,
        },
        items: cartItems,
        total: cartTotal,
      });

      clearCart();
      setSuccess("Payment successful! Your order is confirmed.");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Payment failed or backend is unavailable. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>

      {isSubmitting && <LinearProgress sx={{ mb: 3 }} />}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {success}
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Shipping Information
              </Typography>
              <Stack spacing={2} component="form" onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
                <TextField
                  label="Address"
                  value={form.address}
                  onChange={handleChange("address")}
                  required
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      value={form.city}
                      onChange={handleChange("city")}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Postal Code"
                      value={form.postal}
                      onChange={handleChange("postal")}
                      required
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                  Payment Details
                </Typography>
                <TextField
                  label="Name on Card"
                  value={form.cardName}
                  onChange={handleChange("cardName")}
                  required
                />
                <TextField
                  label="Card Number"
                  value={form.cardNumber}
                  onChange={handleChange("cardNumber")}
                  required
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Expiry Date"
                      value={form.expiry}
                      onChange={handleChange("expiry")}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="CVV"
                      value={form.cvv}
                      onChange={handleChange("cvv")}
                      required
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                >
                  Place Order
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <Box key={item.id}>
                  <Typography fontWeight="medium">{item.name}</Typography>
                  <Typography color="text.secondary">
                    {item.quantity} × ₹{item.price} = ₹
                    {item.price * item.quantity}
                  </Typography>
                </Box>
              ))}
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Total: ₹{cartTotal}</Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
