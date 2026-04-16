import { Box, Typography, Button, Container } from "@mui/material";
import FooterImage from "../assets/shoping.jpg";

const BottomHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "45vh", md: "25vh" },
        background: "linear-gradient(135deg, #0f172a, #111827)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: 5,
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Don't Miss Out 🔥
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.1rem",
              }}
            >
              Join thousands of shoppers getting exclusive deals, discounts,
              and early access to new arrivals.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                background: "linear-gradient(135deg, #f97316, #ef4444)",
                boxShadow: "0 10px 25px rgba(239,68,68,0.4)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 30px rgba(239,68,68,0.6)",
                },
              }}
            >
              Explore Deals
            </Button>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              flex: 1,
              height: { xs: 220, md: 320 },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={FooterImage}
              alt="footer banner"
              sx={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "center",
                transform: "scale(1.02)", // subtle polish
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BottomHero;