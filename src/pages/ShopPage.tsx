import { useEffect, useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Group,
  Select,
  SimpleGrid,
  Card,
  Image,
  Text,
  Button,
  Badge,
  Loader,
  Center,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import apiClient from "../services/api-client";
import type { Product } from "../types/product";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL: string = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await apiClient.get<Product[]>("/products");
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products" + err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // categories from products (dynamic)
  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  // filtering logic
  const filtered = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category ? p.category === category : true;

    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <Center h={300}>
        <Loader />
      </Center>
    );
  }

  if (error) return <Text color="red">{error}</Text>;

  return (
    <Container py="xl">
      {/* Header */}
      <Title order={2} mb="md">
        🛍️ Modern Shop
      </Title>

      {/* Filters */}
      <Group mb="lg" align="flex-end">
        <TextInput
          placeholder="Search products..."
          leftSection={<IconSearch size={16} />}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          w={280}
        />

        {/* Category Filter */}
        <Select
          placeholder="Category"
          data={categories}
          value={category}
          onChange={setCategory}
          clearable
          w={200}
        />

        {/* Sort placeholder (UI only for now) */}
        <Select
          placeholder="Sort by"
          data={[
            "Price: Low to High",
            "Price: High to Low",
            "Newest",
          ]}
          w={200}
        />
      </Group>

      {/* Products */}
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
              style={{
                transition: "0.2s",
                cursor: "pointer",
              }}
              className="product-card"
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

              <Button fullWidth mt="md" radius="md" variant="light">
                Add to Cart
              </Button>
            </Card>
          ))
        )}
      </SimpleGrid>
    </Container>
  );
}