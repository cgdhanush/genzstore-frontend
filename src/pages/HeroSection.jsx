import { Box, Container, Typography, Button, Grid } from "@mui/material";
import HeroImage from "../assets/shoping.jpg";

const HeroSection = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Shop the Latest Trends
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Find amazing deals on electronics, fashion, accessories & more!
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 2,
              }}
            >
              Shop Now
            </Button>
          </Grid>
{/* 
          <Grid item xs={8} md={6}>
            <Box
              component="img"
              src={HeroImage}
              alt="Hero Banner"
              sx={{
                width: "100%",
                borderRadius: 3,
                objectFit: "cover",
              }}
            />
          </Grid> */}

        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;