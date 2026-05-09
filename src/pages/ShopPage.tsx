import { useState } from "react";
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
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://via.placeholder.com/300",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://via.placeholder.com/300",
    tag: "New",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 1499,
    image: "https://via.placeholder.com/300",
    tag: "Hot",
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container py="xl">
      {/* Title */}
      <Title order={2} mb="md">
        Shop Products 🛍️
      </Title>

      {/* Search + Filter */}
      <Group mb="lg" justify="space-between">
        <TextInput
          placeholder="Search products..."
          leftSection={<IconSearch size={16} />}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          w={300}
        />

        <Select
          placeholder="Sort by"
          data={["Price Low to High", "Price High to Low", "Newest"]}
          w={200}
        />
      </Group>

      {/* Products */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {filtered.map((product) => (
          <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={product.image} height={180} alt={product.name} />
            </Card.Section>

            <Group justify="space-between" mt="md">
              <Text fw={500}>{product.name}</Text>
              <Badge color="pink">{product.tag}</Badge>
            </Group>

            <Text size="sm" c="dimmed" mt="xs">
              ₹{product.price}
            </Text>

            <Button fullWidth mt="md" radius="md">
              Add to Cart
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}