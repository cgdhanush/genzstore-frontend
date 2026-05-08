import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Card,
  ThemeIcon,
  Image,
  Stack,
} from "@mantine/core";

import { IconTruck, IconShieldCheck, IconRefresh } from "@tabler/icons-react";

export default function LandingPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <Container size="lg" py={80}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
          <Stack justify="center">
            <Title order={1} size={48} fw={800}>
              Shop Smarter. Live Better.
            </Title>

            <Text size="lg" c="dimmed">
              Discover thousands of products with fast delivery, secure
              payments, and easy returns — all in one place.
            </Text>

            <Group mt="md">
              <Button size="md" radius="md">
                Start Shopping
              </Button>
              <Button variant="light" size="md" radius="md">
                Explore Deals
              </Button>
            </Group>
          </Stack>

          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Shopping illustration"
          />
        </SimpleGrid>
      </Container>

      {/* FEATURES SECTION */}
      <Container size="lg" py={60}>
        <Title order={2} ta="center" mb="xl">
          Why Shop With Us?
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <Card shadow="sm" padding="lg" radius="md">
            <ThemeIcon size={50} radius="md" color="blue">
              <IconTruck size={24} />
            </ThemeIcon>
            <Text fw={600} mt="md">
              Fast Delivery
            </Text>
            <Text size="sm" c="dimmed">
              Get your orders delivered quickly across the country.
            </Text>
          </Card>

          <Card shadow="sm" padding="lg" radius="md">
            <ThemeIcon size={50} radius="md" color="green">
              <IconShieldCheck size={24} />
            </ThemeIcon>
            <Text fw={600} mt="md">
              Secure Payments
            </Text>
            <Text size="sm" c="dimmed">
              Your transactions are protected with top-grade security.
            </Text>
          </Card>

          <Card shadow="sm" padding="lg" radius="md">
            <ThemeIcon size={50} radius="md" color="violet">
              <IconRefresh size={24} />
            </ThemeIcon>
            <Text fw={600} mt="md">
              Easy Returns
            </Text>
            <Text size="sm" c="dimmed">
              Hassle-free returns within 7 days of purchase.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>
    </div>
  );
}
