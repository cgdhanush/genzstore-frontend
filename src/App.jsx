import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: "Roboto, Arial",
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.8rem" },
    h4: { fontSize: "1.5rem" },
    body1: { fontSize: "1rem" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
