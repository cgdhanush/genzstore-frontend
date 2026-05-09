import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavbarLayout from "./components/layout/NavBar";
import CheckoutPage from "./pages/CheckoutPage";

import theme from "./theme";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <NavbarLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* 404 PAGE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </NavbarLayout>
      </BrowserRouter>
    </MantineProvider>
  );
}
