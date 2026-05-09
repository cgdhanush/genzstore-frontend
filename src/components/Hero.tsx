import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Image,
  Stack,
} from "@mantine/core";

const Hero = () => {
  return (
    <Container size="lg" py={80}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
        <Stack justify="center">
          <Title order={1} size={48} fw={800}>
            Shop Smarter. Live Better.
          </Title>

          <Text size="lg" c="dimmed">
            Discover thousands of products with fast delivery, secure payments,
            and easy returns — all in one place.
          </Text>

          <Group mt="md">
            <Button component="a" href="/shop" size="md" radius="md" >
              Start Shopping
            </Button>

            <Button component="a" href="/deals"  variant="light" size="md" radius="md">
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
  );
};

export default Hero;
