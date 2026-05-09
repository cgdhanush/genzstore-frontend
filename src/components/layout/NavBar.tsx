import {
  AppShell,
  Group,
  Burger,
  Text,
  Button,
  TextInput,
  ActionIcon,
  useMantineColorScheme,
  Anchor,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconShoppingCart,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { type JSX } from "react";

export default function NavbarLayout({ children }: { children: JSX.Element }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between" align="center">

          {/* LEFT: Logo */}
          <Text fw={800} size="lg">
            GenZStore
          </Text>

          {/* CENTER: Nav Links */}
          <Group gap="xl" justify="center" style={{ flex: 1 }} visibleFrom="sm">
            <Anchor href="/" c="text" underline="never">
              Home
            </Anchor>
            <Anchor href="/shop" c="text" underline="never">
              Shop
            </Anchor>
          </Group>

          {/* RIGHT: Actions */}
          <Group gap="sm" visibleFrom="sm">
            <TextInput
              placeholder="Search products..."
              leftSection={<IconSearch size={16} />}
              size="sm"
              w={300}
            />

            <ActionIcon variant="light" size="lg" onClick={toggleColorScheme}>
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoon size={18} />
              )}
            </ActionIcon>

            <ActionIcon component="a" href="/checkout" variant="light" size="lg">
              <IconShoppingCart size={18} />
            </ActionIcon>

            <Button size="sm">Login</Button>
          </Group>

          {/* Mobile Burger */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}