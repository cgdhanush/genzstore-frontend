import { Group, Text, Anchor, Container, Stack } from "@mantine/core";

export default function Footer() {
  return (
    <Container mt="xl" py="xl">
      <Group justify="space-between" align="flex-start">
        
        {/* Brand */}
        <Stack gap={5}>
          <Text fw={600} size="lg">
            GenZStore
          </Text>
          <Text size="sm" c="dimmed">
            Your one-stop shop for everything you love.
          </Text>
        </Stack>

        {/* Links */}
        <Stack gap={5}>
          <Text fw={500}>Quick Links</Text>
          <Anchor href="/" c="text" size="sm">Home</Anchor>
          <Anchor href="/shop" c="text" size="sm">Shop</Anchor>
          <Anchor href="/categories" c="text" size="sm">Categories</Anchor>
          <Anchor href="/deals" c="text" size="sm">Deals</Anchor>
        </Stack>

        {/* Support */}
        <Stack gap={5}>
          <Text fw={500}>Support</Text>
          <Anchor href="/help" c="text" size="sm">Help Center</Anchor>
          <Anchor href="/contact" c="text" size="sm">Contact Us</Anchor>
          <Anchor href="/privacy" c="text" size="sm">Privacy Policy</Anchor>
        </Stack>
      </Group>

      {/* Bottom line */}
      <Text ta="center" size="xs" c="dimmed" mt="xl">
        © {new Date().getFullYear()} GenZStore. All rights reserved.
      </Text>
    </Container>
  );
}