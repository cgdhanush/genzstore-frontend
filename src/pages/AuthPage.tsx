import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // LOGIN
  const handleLogin = async () => {
    try {
      const res = await login({ email, password });

      localStorage.setItem("access_token", res.access_token);

      console.log(res.user);

      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  // REGISTER
  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      await register({
        name,
        email,
        password,
      });

      alert("Signup successful! Please login now.");

      setIsLogin(true); // ✅ SWITCH TO LOGIN SCREEN
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  // SUBMIT
  const handleSubmit = () => {
    if (isLogin) handleLogin();
    else handleRegister();
  };

  return (
    <Container size={420} my={80}>
      <Paper radius="md" p="xl" withBorder shadow="sm">
        <Title ta="center" mb="lg">
          {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
        </Title>

        <Stack>
          {!isLogin && (
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <Button fullWidth mt="md" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Text ta="center" size="sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Anchor
              component="button"
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