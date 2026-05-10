import { useEffect, useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Group,
  SimpleGrid,
  Card,
  Image,
  Text,
  Button,
  Badge,
  Loader,
  Center,
  Grid,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import apiClient from "../services/api-client";
import type { Product } from "../types/product";

import ProductFilters from "../components/ProductFilters";
import CartButton from "../components/button/CartButton";

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL: string = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const categoriesData = await apiClient.get<string[]>(
          "/products/categories",
        );

        setCategories(categoriesData);

        let url = "/products?";

        if (category) url += `category=${category}&`;
        if (minPrice !== undefined) url += `minPrice=${minPrice}&`;
        if (maxPrice !== undefined) url += `maxPrice=${maxPrice}&`;

        const productData = await apiClient.get<Product[]>(url);

        setProducts(productData);
      } catch (err) {
        setError("Failed to fetch products " + err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [category, minPrice, maxPrice]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      let url = "/products?";

      if (category) url += `category=${category}&`;
      if (minPrice !== undefined) url += `minPrice=${minPrice}&`;
      if (maxPrice !== undefined) url += `maxPrice=${maxPrice}&`;

      const productData = await apiClient.get<Product[]>(url);

      setProducts(productData);
    } catch (err) {
      setError("Failed to fetch products " + err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    fetchProducts();
  };

  const clearFilters = () => {
    setCategory(null);
    setMinPrice(undefined);
    setMaxPrice(undefined);

    setTimeout(() => {
      fetchProducts();
    }, 100);
  };

  // Search filter
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <Center h={300}>
        <Loader />
      </Center>
    );
  }

  if (error) return <Text c="red">{error}</Text>;

  return (
    <Container py="xl" size="xl">
      <Title order={2} mb="xl">
        🛍️ Modern Shop
      </Title>

      <Grid>
        {/* LEFT SIDEBAR */}
        <Grid.Col span={{ base: 12, md: 3 }}>
          <ProductFilters
            categories={categories}
            category={category}
            setCategory={setCategory}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />
        </Grid.Col>

        {/* RIGHT CONTENT */}
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Group mb="lg">
            <TextInput
              placeholder="Search products..."
              leftSection={<IconSearch size={16} />}
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              w={300}
            />
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {filtered.length === 0 ? (
              <Text>No products found</Text>
            ) : (
              filtered.map((product) => (
                <Card
                  key={product.id}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Card.Section>
                    <Image
                      src={`${baseURL}/products/${product.imageId}/image`}
                      height={180}
                      alt={product.name}
                      fit="cover"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md">
                    <Text fw={600}>{product.name}</Text>
                    <Badge color="blue">{product.category}</Badge>
                  </Group>

                  <Text size="sm" c="dimmed" mt="xs">
                    ₹{product.price}
                  </Text>

                  <CartButton product={product} />
                </Card>
              ))
            )}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
