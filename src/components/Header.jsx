import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 30,
  backgroundColor: alpha(theme.palette.common.white, 0.12),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.18),
  },
  width: "100%",
  maxWidth: 450,
  display: "flex",
  alignItems: "center",
  padding: "4px 14px",
}));

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #d7514a, #7887a1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>

        {/* Logo */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <Box
            component="img"
            src="/src/assets/logo.png"
            alt="logo"
            sx={{ width: 45, height: 45 }}   // 👈 bigger logo
          />

          <Typography
            variant="h5"   // 👈 bigger text (was h6)
            component={Link}
            to="/home"
            sx={{
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: "1.6rem",  // 👈 extra control
            }}
          >
            GenZStore
          </Typography>
        </Box>

        {/* Search */}
        <Search>
          <SearchIcon sx={{ color: "white", mr: 1, fontSize: 26 }} />
          <InputBase
            placeholder="Search products..."
            sx={{ color: "white", fontSize: "1rem", width: "100%" }}
          />
        </Search>

        {/* Menu */}
        <Box display="flex" alignItems="center" gap={2}>

          <Button
            component={Link}
            to="/login"
            sx={{ color: "white", textTransform: "none", fontSize: "1rem" }}
            startIcon={<LoginOutlinedIcon sx={{ fontSize: 22 }} />}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/cart"
            sx={{ color: "white", textTransform: "none", fontSize: "1rem" }}
            startIcon={
              <Badge badgeContent={2} color="error">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 22 }} />
              </Badge>
            }
          >
            Cart
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;