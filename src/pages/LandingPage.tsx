import { Stack } from "@mantine/core";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function LandingPage() {
  return (
    <Stack gap="xl">
      <Hero />
      <Categories />
      <ProductGrid />
    </Stack>
  );
}
