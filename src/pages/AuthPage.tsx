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

import { login, register } from "../services/auth.service";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //
  // LOGIN
  //
  const handleLogin = async () => {
    try {
      const res = await login({
        email,
        password,
      });

      localStorage.setItem("access_token", res.access_token);

      console.log(res.user);
    } catch (err) {
      console.error(err);
    }
  };

  //
  // REGISTER
  //
  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const res = await register({
        name,
        email,
        password,
      });

      localStorage.setItem("access_token", res.access_token);

      console.log(res.user);
    } catch (err) {
      console.error(err);
    }
  };

  //
  // SUBMIT
  //
  const handleSubmit = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <Container size={420} my={80}>
      <Paper radius="md" p="xl" withBorder shadow="sm">
        <Title ta="center" mb="lg">
          {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
        </Title>

        <Stack>
          {/* NAME */}
          {!isLogin && (
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          {/* EMAIL */}
          <TextInput
            label="Email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* CONFIRM PASSWORD */}
          {!isLogin && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {/* BUTTON */}
          <Button fullWidth mt="md" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          {/* SWITCH MODE */}
          <Text ta="center" size="sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
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
