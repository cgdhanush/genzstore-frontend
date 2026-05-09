import { Button, Group, ActionIcon, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/product";

export default function CartButton({ product }: { product: Product }) {
  const items = useCartStore((s) => s.items);

  const addToCart = useCartStore((s) => s.addToCart);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);

  // Match using productId from cart
  const cartItem = items.find((item) => item.product.id === product.id);

  const qty = cartItem?.quantity || 0;

  // Not in cart
  if (qty === 0) {
    return (
      <Button
        fullWidth
        onClick={() => {
          addToCart({
            product: product,
          });
        }}
      >
        Add to Cart
      </Button>
    );
  }

  // In cart
  return (
    <Group justify="space-between" mt="md">
      <ActionIcon
        variant="light"
        onClick={async () => {
          await decreaseQty(product);
        }}
      >
        <IconMinus size={16} />
      </ActionIcon>

      <Text fw={500}>{qty}</Text>

      <ActionIcon
        variant="light"
        onClick={async () => {
          await increaseQty(product);
        }}
      >
        <IconPlus size={16} />
      </ActionIcon>
    </Group>
  );
}
