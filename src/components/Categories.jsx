import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const categories = [
  "Electronics",
  "Fashion",
  "Shoes",
  "Accessories",
];

const Categories = () => {
  return (
    <Box component="section" sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Shop by Category
        </Typography>
        <Grid container spacing={3}>
          {categories.map((name) => (
            <Grid item xs={12} sm={6} md={3} key={name}>
              <Paper
                elevation={2}
                sx={{
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  px: 2,
                }}
              >
                <Typography variant="h6">{name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
