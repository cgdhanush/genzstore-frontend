import { Box, Typography, Button, Container } from "@mui/material";
import HeroImage from "../assets/shoping.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "65vh", md: "45vh" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.05)", // slight zoom
          animation: "zoomIn 12s ease-in-out infinite alternate",
          "@keyframes zoomIn": {
            from: { transform: "scale(1.05)" },
            to: { transform: "scale(1.12)" },
          },
        }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: 550,
            color: "white",
            p: 4,
            borderRadius: 4,

            // glass effect
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",

            // animation
            animation: "fadeUp 1s ease-out",

            "@keyframes fadeUp": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3.8rem" },
              lineHeight: 1.1,
            }}
          >
            Shop Here
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: "rgba(255,255,255,0.75)",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Discover premium fashion, electronics, and lifestyle products with
            unbeatable deals made for Gen Z shoppers.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              px: 5,
              py: 1.6,
              fontWeight: "bold",
              borderRadius: 3,
              fontSize: "1rem",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 10px 25px rgba(99,102,241,0.4)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 15px 30px rgba(99,102,241,0.6)",
              },
              transition: "0.3s ease",
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;