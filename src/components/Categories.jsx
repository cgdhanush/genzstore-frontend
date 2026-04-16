import { Box, Container, Typography } from "@mui/material";

const categories = ["Electronics", "Fashion", "Shoes", "Accessories"];

const Categories = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 1, // 👈 remove top & bottom spacing
      }}
    >
      <Container maxWidth="lg">
        {/* Centered row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // 👈 center horizontally
            gap: 2,
            flexWrap: "nowrap",
            overflowX: "auto",
            pb: 0, // 👈 no bottom space

            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {categories.map((name) => (
            <Box
              key={name}
              sx={{
                px: 2,
                py: 0.8,
                borderRadius: 999,
                whiteSpace: "nowrap",

                background: "#0f172a",
                color: "white",

                fontWeight: 600,
                fontSize: "1.5rem",

                cursor: "pointer",
                flexShrink: 0,

                transition: "0.3s ease",

                "&:hover": {
                  background: "#6366f1",
                  transform: "scale(1.05)",
                },
              }}
            >
              {name}
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Categories;