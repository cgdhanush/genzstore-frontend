import {
  Container,
  Title,
  Text,
  Group,
  Paper,
  Image,
  Button,
} from "@mantine/core";
import { useCartStore } from "../store/cartStore";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  console.log(items);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Container>
      <Title order={2} mb="lg">
        Checkout
      </Title>

      {items.length === 0 ? (
        <Text>No items in cart</Text>
      ) : (
        items.map((item) => (
          <Paper key={item.id} p="md" withBorder mb="sm">
            <Group justify="space-between">
              <Group>
                <Image src={item.imageId} width={60} height={60} />
                <div>
                  <Text fw={500}>{item.name}</Text>
                  <Text size="sm">₹{item.price}</Text>
                </div>
              </Group>

              <Group>
                <Button size="xs" onClick={() => decreaseQty(item.id)}>
                  -
                </Button>

                <Text>{item.qty}</Text>

                <Button size="xs" onClick={() => increaseQty(item.id)}>
                  +
                </Button>

                <Button
                  color="red"
                  size="xs"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Group>
            </Group>
          </Paper>
        ))
      )}

      <Title order={4} mt="lg">
        Total: ₹{total}
      </Title>
    </Container>
  );
}
