import {
  Card,
  Image,
  Text,
  Group,
  SimpleGrid,
  Badge,
} from "@mantine/core";

import { productsData } from "../data.ts";
import type { Product } from "../types/product.ts";
import { useState } from "react";
import CartButton from "./button/CartButton.tsx";

export default function ProductGrid() {
  const [products, ] = useState<Product[]>(productsData);

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {products.map((product) => (
        <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={product.imageId} height={180} alt={product.name} />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{product.name}</Text>
            <Badge color="pink">{product.tag}</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            ₹{product.price}
          </Text>

          <CartButton product={product}/>
        </Card>
      ))}
    </SimpleGrid>
  );
}
