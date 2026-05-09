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

type CheckoutItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    imageId: string;
    category: string;
    qty: number;
  };

  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export default function CheckoutItem({
  item,
  increaseQty,
  decreaseQty,
  removeFromCart,
}: CheckoutItemProps) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Group justify="space-between" align="center">
        <Group>
          <Image src={item.imageId} w={90} h={90} radius="md" />

          <Box>
            <Text fw={600} size="lg">
              {item.name}
            </Text>

            <Badge color="blue" variant="light" mt={4}>
              {item.category}
            </Badge>

            <Text mt={8} fw={700} c="green">
              ₹{item.price}
            </Text>
          </Box>
        </Group>

        <Stack gap={8} align="flex-end">
          <Group gap="xs">
            <Button
              size="xs"
              radius="xl"
              variant="light"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </Button>

            <Text fw={600}>{item.qty}</Text>

            <Button
              size="xs"
              radius="xl"
              variant="light"
              onClick={() => increaseQty(item.id)}
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
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </Stack>
      </Group>
    </Card>
  );
}