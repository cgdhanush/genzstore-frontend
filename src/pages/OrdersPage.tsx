import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Paper,
  Text,
  Group,
  Stack,
  Divider,
  Badge,
  Image,
  Accordion,
  ThemeIcon,
} from "@mantine/core";

import { IconPackage } from "@tabler/icons-react";

import type { Order } from "../types/orders";
import { orderService } from "../services/order.service";

const baseURL: string = import.meta.env.VITE_API_URL;

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderService.getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  console.log(orders);
  
  if (loading) {
    return (
      <Container py="xl">
        <Text>Loading orders...</Text>
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      {/* Header */}
      <Group mb="xl">
        <ThemeIcon size={42} radius="xl" variant="light">
          <IconPackage size={22} />
        </ThemeIcon>

        <Title order={2}>My Orders</Title>
      </Group>

      {orders.length === 0 ? (
        <Paper p="xl" withBorder>
          <Text>No previous orders found.</Text>
        </Paper>
      ) : (
        <Accordion variant="separated" radius="md">
          {orders.map((order) => (
            <Accordion.Item key={order.id} value={order.id}>
              {/* Order Header */}
              <Accordion.Control>
                <Group justify="space-between">
                  <div>
                    <Text fw={600}>Order #{order.id}</Text>

                    <Text size="sm" c="dimmed">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleString()
                        : "N/A"}
                    </Text>
                  </div>

                  <Group>
                    <Badge color="blue">{order.status}</Badge>

                    <Text fw={700}>₹{order.totalAmount}</Text>
                  </Group>
                </Group>
              </Accordion.Control>

              {/* Order Details */}
              <Accordion.Panel>
                <Stack gap="md">
                  {order.products.map((item, index) => (
                    <Paper key={index} withBorder p="sm" radius="md">
                      <Group align="flex-start">
                        {/* Product Image */}
                        <Image
                          src={`${baseURL}/products/${item.product.imageId}/image`}
                          height={80}
                          width={80}
                          radius="md"
                          fit="cover"
                        />

                        {/* Product Info */}
                        <div style={{ flex: 1 }}>
                          <Text fw={600}>{item.product.name}</Text>

                          <Text size="sm" c="dimmed">
                            {item.product.description}
                          </Text>

                          <Group mt={6} justify="space-between">
                            <Text size="sm">Qty: {item.quantity}</Text>

                            <Text fw={600} c="blue">
                              ₹{item.product.price * item.quantity}
                            </Text>
                          </Group>
                        </div>
                      </Group>
                    </Paper>
                  ))}

                  <Divider />

                  <Group justify="space-between">
                    <Text fw={700}>Total</Text>
                    <Text fw={700} size="lg" c="blue">
                      ₹{order.totalAmount}
                    </Text>
                  </Group>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  );
};

export default OrdersPage;
