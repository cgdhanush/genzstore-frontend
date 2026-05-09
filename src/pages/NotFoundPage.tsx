import { Container, Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container ta="center" py="xl">
      <Title order={1}>404</Title>
      <Text size="lg" mt="sm">
        Page Not Found
      </Text>

      <Button mt="md" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Container>
  );
}