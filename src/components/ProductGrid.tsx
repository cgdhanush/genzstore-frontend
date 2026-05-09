import {
  Card,
  Image,
  Text,
  Button,
  Group,
  SimpleGrid,
  Badge,
} from "@mantine/core";

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

export default function ProductGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {products.map((product) => (
        <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={product.image} height={180} alt={product.name} />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{product.name}</Text>
            <Badge color="pink">{product.tag}</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            ₹{product.price}
          </Text>

          <Button fullWidth mt="md" radius="md">
            Add to Cart
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
}
