import { Button, Group, ActionIcon, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/product";

export default function CartButton({ product }: {product: Product}) {
  const items = useCartStore((s) => s.items);
  const addToCart = useCartStore((s) => s.addToCart);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);

  const cartItem = items.find((i) => i.id === product.id);

  const qty = cartItem?.qty || 0;

  if (qty === 0) {
    return (
      <Button fullWidth onClick={() => addToCart(product)} >
        Add to Cart
      </Button>
    );
  }

  // If in cart → show +/- controls
  return (
    <Group justify="space-between" mt="md">
      <ActionIcon
        variant="light"
        onClick={() => decreaseQty(product.id)}
      >
        <IconMinus size={16} />
      </ActionIcon>

      <Text fw={500}>{qty}</Text>

      <ActionIcon
        variant="light"
        onClick={() => increaseQty(product.id)}
      >
        <IconPlus size={16} />
      </ActionIcon>
    </Group>
  );
}