import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Avatar,
  Text,
  Title,
  Loader,
  Center,
} from "@mantine/core";
import apiClient from "../services/api-client";

type Profile = {
  email: string;
  username: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiClient.get<Profile>("/users/profile");
        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Center h={300}>
        <Loader />
      </Center>
    );
  }

  if (!profile) return <Text>Profile not found</Text>;

  return (
    <Container size="sm" py="xl">
      <Title order={2} mb="lg">
        👤 Profile
      </Title>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Center mb="md">
          <Avatar size={80} radius="xl">
            {profile.username.charAt(0).toUpperCase()}
          </Avatar>
        </Center>

        <Text ta="center" fw={600} size="lg">
          {profile.username}
        </Text>

        <Text ta="center" c="dimmed">
          {profile.email}
        </Text>
      </Card>
    </Container>
  );
}