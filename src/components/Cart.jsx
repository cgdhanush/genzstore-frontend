import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";
import DiscountOutlined from "@mui/icons-material/DiscountOutlined";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, itemCount, updateQuantity, removeFromCart } = useCart();

  return (
    <Box sx={{ background: "#f7f8fa", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Typography variant="h3" fontWeight={700} mb={4} py={1} textAlign="center">
          Your Shopping Cart
        </Typography>

        <Grid container spacing={4}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    background: "#fff",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                  }}
                >
                  <Grid container spacing={2} alignItems="center">

                    {/* IMAGE */}
                    <Grid item xs={3}>
                      <Box
                        component="img"
                        src={item.image}
                        sx={{
                          width: "100%",
                          height: 90,
                          objectFit: "cover",
                          borderRadius: 2,
                        }}
                      />
                    </Grid>

                    {/* DETAILS */}
                    <Grid item xs={9} md={4}>
                      <Typography fontWeight={600}>{item.name}</Typography>

                      <Typography variant="body2" color="text.secondary">
                        Category: Fashion
                      </Typography>

                      <Stack direction="row" spacing={1} mt={1}>
                        <Chip label="In Stock" color="success" size="small" />
                        <Chip label="Free Delivery" size="small" />
                      </Stack>

                      <Typography mt={1} fontWeight={500}>
                        ₹{item.price}
                      </Typography>
                    </Grid>

                    {/* QUANTITY */}
                    <Grid item xs={6} md={3}>
                      <Stack direction="row" alignItems="center">
                        <IconButton
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <RemoveRounded />
                        </IconButton>

                        <TextField
                          value={item.quantity}
                          size="small"
                          sx={{ width: 60 }}
                          inputProps={{ style: { textAlign: "center" } }}
                        />

                        <IconButton
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <AddRounded />
                        </IconButton>
                      </Stack>
                    </Grid>

                    {/* PRICE + DELETE */}
                    <Grid item xs={6} md={2}>
                      <Stack alignItems="flex-end">
                        <Typography fontWeight={600}>
                          ₹{item.price * item.quantity}
                        </Typography>

                        <IconButton
                          color="error"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <DeleteOutlineRounded />
                        </IconButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </Card>
              ))}

              {/* DELIVERY INFO */}
              <Card sx={{ p: 3, borderRadius: 4 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocalShippingOutlined color="primary" />
                  <Typography>
                    Delivery in 2–4 days | Free shipping on orders above ₹499
                  </Typography>
                </Stack>
              </Card>
            </Stack>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                position: "sticky",
                top: 100,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                Order Summary
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography color="text.secondary">Items</Typography>
                <Typography>{itemCount}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography>₹{cartTotal}</Typography>
              </Box>

              {/* DISCOUNT FIELD */}
              <Box mt={3}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Apply coupon code"
                  InputProps={{
                    startAdornment: <DiscountOutlined sx={{ mr: 1 }} />,
                  }}
                />
                <Button size="small" sx={{ mt: 1 }}>
                  Apply
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight={600}>Total</Typography>
                <Typography fontWeight={700}>₹{cartTotal}</Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                }}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;