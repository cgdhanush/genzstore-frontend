import { useState } from "react";
import {
  Container,
  Paper,
  Title,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Stack,
  Anchor,
} from "@mantine/core";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container size={420} my={80}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        shadow="sm"
      >
        <Title ta="center" mb="lg">
          {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
        </Title>

        <Stack>
          {!isLogin && (
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              required
            />
          )}

          <TextInput
            label="Email"
            placeholder="you@example.com"
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
          />

          {!isLogin && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              required
            />
          )}

          <Button fullWidth mt="md">
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Text ta="center" size="sm">
            {isLogin
              ? "Don’t have an account?"
              : "Already have an account?"}{" "}
            <Anchor
              component="button"
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Anchor>
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}