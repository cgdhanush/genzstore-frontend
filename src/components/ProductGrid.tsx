import { Card, Image, Text, Group, SimpleGrid, Badge } from "@mantine/core";

import type { Product } from "../types/product.ts";
import { useEffect, useState } from "react";
import CartButton from "./button/CartButton.tsx";
import apiClient from "../services/api-client.ts";

// import { productsData } from "../data.ts";

export default function ProductGrid() {
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
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {products.map((product) => (
        <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src={`${baseURL}/products/${product.imageId}/image`}
              height={180}
              alt={product.name}
              fit="cover"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{product.name}</Text>
            <Badge color="pink">{product.tag}</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            ₹{product.price}
          </Text>

          <CartButton product={product} />
        </Card>
      ))}
    </SimpleGrid>
  );
}
