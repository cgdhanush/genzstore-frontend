import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#111", color: "#fff", pt: 6, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Logo & About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              GenZStore
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "grey.400" }}>
              Your one-stop shop for fashion, electronics & more!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" underline="hover" color="inherit">Home</Link>
              <Link href="/products" underline="hover" color="inherit">Products</Link>
              <Link href="/about" underline="hover" color="inherit">About Us</Link>
              <Link href="/contact" underline="hover" color="inherit">Contact</Link>
            </Stack>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Customer Service
            </Typography>
            <Stack spacing={1}>
              <Link href="/faq" underline="hover" color="inherit">FAQ</Link>
              <Link href="/shipping" underline="hover" color="inherit">Shipping</Link>
              <Link href="/returns" underline="hover" color="inherit">Returns</Link>
              <Link href="/support" underline="hover" color="inherit">Support</Link>
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: "white" }} aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }} aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }} aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }} aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ my: 3, borderColor: "grey.800" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ pb: 2, color: "grey.500" }}
        >
          © 2026 GenZStore. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;