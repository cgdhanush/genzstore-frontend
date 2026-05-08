import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import theme from "./theme";

import LandingPage from "./pages/LandingPage";
import NavbarLayout from "./components/Layout/NavBar";

export default function App() {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <NavbarLayout>
          <LandingPage />
        </NavbarLayout>
      </MantineProvider>
      ;
    </>
  );
}
