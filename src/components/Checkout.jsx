import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Alert,
  Radio,
  RadioGroup,
  FormControlLabel,
  Chip,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { createOrder, processPayment } from "../api/shopApi";
import GoogleIcon from "@mui/icons-material/Google";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cartItems.length) {
      setError("Cart is empty");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 💳 Payment simulation
      await processPayment({
        amount: cartTotal,
        method: paymentMethod,
      });

      await createOrder({
        customer: form,
        items: cartItems,
        total: cartTotal,
        paymentMethod,
      });

      clearCart();
      setSuccess("Order placed successfully!");

      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError("Payment failed. Try again.", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ background: "#f6f7fb", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">

        <Typography variant="h4" fontWeight={700} mb={4}>
          Checkout
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <Grid container spacing={4}>
          
          {/* LEFT - FORM */}
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>

              {/* SHIPPING */}
              <Card sx={{ p: 3, borderRadius: 4 }}>
                <Typography fontWeight={600} mb={2}>
                  Shipping Details
                </Typography>

                <Stack spacing={2}>
                  <TextField label="Full Name" fullWidth onChange={handleChange("name")} />
                  <TextField label="Email" fullWidth onChange={handleChange("email")} />
                  <TextField label="Address" fullWidth onChange={handleChange("address")} />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField label="City" fullWidth onChange={handleChange("city")} />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Postal Code" fullWidth onChange={handleChange("postal")} />
                    </Grid>
                  </Grid>
                </Stack>
              </Card>

              {/* PAYMENT */}
              <Card sx={{ p: 3, borderRadius: 4 }}>
                <Typography fontWeight={600} mb={2}>
                  Payment Method
                </Typography>

                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <Stack spacing={1}>

                    <Card
                      sx={{
                        p: 1,
                        border: paymentMethod === "card" ? "2px solid #1976d2" : "1px solid #ddd",
                        borderRadius: 3,
                      }}
                    >
                      <FormControlLabel
                        value="card"
                        control={<Radio />}
                        label="Credit / Debit Card"
                      />
                    </Card>

                    <Card
                      sx={{
                        p: 1,
                        border: paymentMethod === "gpay" ? "2px solid #00a152" : "1px solid #ddd",
                        borderRadius: 3,
                      }}
                    >
                      <FormControlLabel
                        value="gpay"
                        control={<Radio icon={<GoogleIcon />} />}
                        label="Google Pay (GPay)"
                      />
                    </Card>

                  </Stack>
                </RadioGroup>

                {paymentMethod === "gpay" && (
                  <Chip
                    icon={<GoogleIcon />}
                    label="You will be redirected to Google Pay"
                    sx={{ mt: 2 }}
                  />
                )}
              </Card>

              {/* PLACE ORDER */}
              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                {loading ? "Processing..." : "Place Order"}
              </Button>
            </Stack>
          </Grid>

          {/* RIGHT - SUMMARY */}
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3, borderRadius: 4, position: "sticky", top: 100 }}>
              <Typography fontWeight={600}>Order Summary</Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={1}>
                {cartItems.map((item) => (
                  <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body2">
                      {item.name} × {item.quantity}
                    </Typography>
                    <Typography variant="body2">
                      ₹{item.price * item.quantity}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight={600}>Total</Typography>
                <Typography fontWeight={700}>₹{cartTotal}</Typography>
              </Box>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;