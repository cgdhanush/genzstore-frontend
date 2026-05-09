import {
  Container,
  Title,
  Text,
  Group,
  Paper,
  Stack,
  Divider,
  Radio,
  Button,
  ThemeIcon,
} from "@mantine/core";

import {
  IconShoppingBag,
  IconBrandGoogle,
  IconCreditCard,
  IconCash,
} from "@tabler/icons-react";

import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import CheckoutItem from "../components/CheckoutItem";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const increaseQty = useCartStore(
    (state) => state.increaseQty
  );

  const decreaseQty = useCartStore(
    (state) => state.decreaseQty
  );

  const [paymentMethod, setPaymentMethod] =
    useState("gpay");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const deliveryFee = subtotal > 2000 ? 0 : 99;

  const total = subtotal + deliveryFee;

  return (
    <Container size="md" py="xl">
      {/* Header */}
      <Group mb="xl">
        <ThemeIcon
          size={48}
          radius="xl"
          variant="light"
          color="blue"
        >
          <IconShoppingBag size={28} />
        </ThemeIcon>

        <div>
          <Title order={2}>Secure Checkout</Title>

          <Text c="dimmed">
            Review your items and complete payment
          </Text>
        </div>
      </Group>

      {items.length === 0 ? (
        <Paper p="xl" radius="lg" withBorder ta="center">
          <Text size="lg" fw={500}>
            Your cart is empty 🛒
          </Text>
        </Paper>
      ) : (
        <Group align="flex-start" grow>
          {/* Cart Items */}
          <Stack>
            {items.map((item) => (
              <CheckoutItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeFromCart={removeFromCart}
              />
            ))}
          </Stack>

          {/* Payment Section */}
          <Paper
            p="xl"
            radius="lg"
            withBorder
            shadow="sm"
            style={{
              minWidth: 320,
              position: "sticky",
              top: 20,
            }}
          >
            <Title order={4} mb="md">
              Order Summary
            </Title>

            <Group justify="space-between" mb="sm">
              <Text c="dimmed">Subtotal</Text>
              <Text fw={500}>₹{subtotal}</Text>
            </Group>

            <Group justify="space-between" mb="sm">
              <Text c="dimmed">Delivery</Text>

              <Text fw={500}>
                {deliveryFee === 0
                  ? "Free"
                  : `₹${deliveryFee}`}
              </Text>
            </Group>

            <Divider my="md" />

            <Group justify="space-between" mb="lg">
              <Text fw={700} size="lg">
                Total
              </Text>

              <Text fw={700} size="lg" c="blue">
                ₹{total}
              </Text>
            </Group>

            {/* Payment Options */}
            <Title order={5} mb="sm">
              Payment Method
            </Title>

            <Radio.Group
              value={paymentMethod}
              onChange={setPaymentMethod}
            >
              <Stack gap="sm">
                <Paper withBorder p="sm" radius="md">
                  <Radio
                    value="gpay"
                    label={
                      <Group gap="xs">
                        <IconBrandGoogle size={18} />
                        <Text>Google Pay (GPay)</Text>
                      </Group>
                    }
                  />
                </Paper>

                <Paper withBorder p="sm" radius="md">
                  <Radio
                    value="card"
                    label={
                      <Group gap="xs">
                        <IconCreditCard size={18} />
                        <Text>Credit / Debit Card</Text>
                      </Group>
                    }
                  />
                </Paper>

                <Paper withBorder p="sm" radius="md">
                  <Radio
                    value="cod"
                    label={
                      <Group gap="xs">
                        <IconCash size={18} />
                        <Text>Cash on Delivery</Text>
                      </Group>
                    }
                  />
                </Paper>
              </Stack>
            </Radio.Group>

            <Button
              fullWidth
              size="md"
              radius="xl"
              mt="xl"
              gradient={{ from: "blue", to: "cyan" }}
              variant="gradient"
            >
              Pay ₹{total}
            </Button>
          </Paper>
        </Group>
      )}
    </Container>
  );
}