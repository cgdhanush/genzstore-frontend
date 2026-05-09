import {
  Card,
  Group,
  Image,
  Text,
  Badge,
  Stack,
  Button,
  Box,
} from "@mantine/core";

import { IconTrash } from "@tabler/icons-react";
import type { Product } from "../types/product";

type CheckoutItemProps = {
  item: {
    product: Product;
    quantity: number;
  };
  increaseQty: (item: Product) => void;
  decreaseQty: (item: Product) => void;
  removeFromCart: (item: Product) => void;
};

export default function CheckoutItem({
  item,
  increaseQty,
  decreaseQty,
  removeFromCart,
}: CheckoutItemProps) {
  const baseURL: string = import.meta.env.VITE_API_URL;

  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Group justify="space-between" align="center">
        <Group>
          <Image
            src={`${baseURL}/products/${item.product.imageId}/image`}
            w={90}
            h={90}
            radius="md"
          />

          <Box>
            <Text fw={600} size="lg">
              {item.product.name}
            </Text>

            <Badge color="blue" variant="light" mt={4}>
              {item.product.category}
            </Badge>

            <Text mt={8} fw={700} c="green">
              ₹{item.product.price}
            </Text>
          </Box>
        </Group>

        <Stack gap={8} align="flex-end">
          <Group gap="xs">
            <Button
              size="xs"
              radius="xl"
              variant="light"
              onClick={() => decreaseQty(item.product)}
            >
              -
            </Button>

            <Text fw={600}>{item.quantity}</Text>

            <Button
              size="xs"
              radius="xl"
              variant="light"
              onClick={() => increaseQty(item.product)}
            >
              +
            </Button>
          </Group>

          <Button
            leftSection={<IconTrash size={14} />}
            color="red"
            variant="light"
            size="xs"
            radius="xl"
            onClick={() => removeFromCart(item.product)}
          >
            Remove
          </Button>
        </Stack>
      </Group>
    </Card>
  );
}
