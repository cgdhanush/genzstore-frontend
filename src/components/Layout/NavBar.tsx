import {
  AppShell,
  Group,
  Burger,
  Text,
  Button,
  TextInput,
  ActionIcon,
  Drawer,
  Stack,
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
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw={800} size="lg">
            GenZStore
          </Text>

          {/* Desktop Nav */}
          <Group gap="md" visibleFrom="sm">
            <Anchor href="/" >Home</Anchor>
            <Anchor href="/shop">Shop</Anchor>
            <Anchor href="/categories">Categories</Anchor>
            <Anchor href="/deals">Deals</Anchor>
          </Group>

          {/* Search + Cart */}
          <Group gap="sm" visibleFrom="sm">
            <TextInput
              placeholder="Search products..."
              leftSection={<IconSearch size={16} />}
              size="sm"
            />
            <ActionIcon
              variant="light"
              size="lg"
              onClick={toggleColorScheme} // ✅ correct
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoon size={18} />
              )}
            </ActionIcon>

            <ActionIcon variant="light" size="lg">
              <IconShoppingCart size={18} />
            </ActionIcon>

            <Button size="sm">Login</Button>
          </Group>

          {/* Mobile Burger */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </AppShell.Header>

      {/* MOBILE MENU */}
      <Drawer opened={opened} onClose={close} padding="md" title="Menu">
        <Stack>
          <Text>Home</Text>
          <Text>Shop</Text>
          <Text>Categories</Text>
          <Text>Deals</Text>

          <TextInput
            placeholder="Search products..."
            leftSection={<IconSearch size={16} />}
          />

          <Button fullWidth>Cart</Button>
          <Button fullWidth variant="light">
            Login
          </Button>
        </Stack>
      </Drawer>

      {/* PAGE CONTENT */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
