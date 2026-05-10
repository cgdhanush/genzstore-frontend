import {
  Paper,
  Title,
  Text,
  Group,
  Divider,
  Radio,
  Stack,
  Button,
} from "@mantine/core";

import {
  IconBrandGoogle,
  IconCreditCard,
  IconCash,
} from "@tabler/icons-react";

type Props = {
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
};

export default function OrderSummary({
  subtotal,
  deliveryFee,
  total,
  paymentMethod,
  setPaymentMethod,
}: Props) {
  return (
    <Paper
      p="xl"
      radius="lg"
      withBorder
      shadow="sm"
      style={{ minWidth: 320, position: "sticky", top: 20 }}
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
          {deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}
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

      {/* Payment Methods */}
      <Title order={5} mb="sm">
        Payment Method
      </Title>

      <Radio.Group value={paymentMethod} onChange={setPaymentMethod}>
        <Stack gap="sm">

          <Radio
            value="gpay"
            label={
              <Group gap="xs">
                <IconBrandGoogle size={18} />
                <Text>Google Pay</Text>
              </Group>
            }
          />

          <Radio
            value="card"
            label={
              <Group gap="xs">
                <IconCreditCard size={18} />
                <Text>Card</Text>
              </Group>
            }
          />

          <Radio
            value="cod"
            label={
              <Group gap="xs">
                <IconCash size={18} />
                <Text>Cash on Delivery</Text>
              </Group>
            }
          />
        </Stack>
      </Radio.Group>

      <Button
        fullWidth
        mt="xl"
        radius="xl"
        variant="gradient"
        gradient={{ from: "blue", to: "cyan" }}
      >
        Pay ₹{total}
      </Button>
    </Paper>
  );
}