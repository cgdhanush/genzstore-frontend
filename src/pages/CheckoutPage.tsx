import {
  Container,
  Title,
  Text,
  Group,
  Paper,
  Stack,
  ThemeIcon,
  Button,
} from "@mantine/core";

import { IconShoppingBag } from "@tabler/icons-react";
import { useState } from "react";

import { useCartStore } from "../store/cartStore";
import CheckoutItem from "../components/CheckoutItem";
import OrderSummary from "../components/OrderSummary";
import { orderService } from "../services/order.service";

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const clearCart = useCartStore((state) => state.clearCart);

  const [paymentMethod, setPaymentMethod] = useState("gpay");
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const deliveryFee = subtotal > 2000 ? 0 : 99;
  const total = subtotal + deliveryFee;

  const placeOrder = async () => {
    if (cartItems.length === 0) return;

    try {
      setLoading(true);

      const orderPayload = {
        products: cartItems.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
        totalAmount: total,
      };

      const order = await orderService.createOrder(orderPayload);

      console.log("Order created:", order);

      clearCart();

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="md" py="xl">
      {/* Header */}
      <Group mb="xl">
        <ThemeIcon size={48} radius="xl" variant="light" color="blue">
          <IconShoppingBag size={28} />
        </ThemeIcon>

        <div>
          <Title order={2}>Secure Checkout</Title>
          <Text c="dimmed">Review your items and complete payment</Text>
        </div>
      </Group>

      {cartItems.length === 0 ? (
        <Paper p="xl" radius="lg" withBorder ta="center">
          <Text size="lg" fw={500}>
            Your cart is empty 🛒
          </Text>
        </Paper>
      ) : (
        <Group align="flex-start" grow>
          {/* Items */}
          <Stack>
            {cartItems.map((item) => (
              <CheckoutItem
                key={item.product.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeFromCart={removeFromCart}
              />
            ))}
          </Stack>

          {/* Summary */}
          <OrderSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </Group>
      )}

      {/* Pay Button */}
      {cartItems.length > 0 && (
        <Button
          fullWidth
          mt="xl"
          radius="xl"
          size="md"
          loading={loading}
          onClick={placeOrder}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
        >
          Pay ₹{total}
        </Button>
      )}
    </Container>
  );
}
