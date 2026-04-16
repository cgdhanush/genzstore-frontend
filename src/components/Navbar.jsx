import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <ShoppingBagOutlinedIcon fontSize="large" />
          <Typography variant="h6" component={Link} to="/home" sx={{ color: "inherit", textDecoration: "none" }}>
            GenZStore
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <Button component={Link} to="/home" color="inherit">
            Products
          </Button>
          <Button component={Link} to="/login" color="inherit" startIcon={<LoginOutlinedIcon />}>
            Login
          </Button>
          <Button component={Link} to="/cart" color="inherit" startIcon={
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          }>
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
