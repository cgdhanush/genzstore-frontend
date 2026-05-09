import {
  AppShell,
  Group,
  Burger,
  Text,
  TextInput,
  ActionIcon,
  useMantineColorScheme,
  Anchor,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconShoppingCart,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { useCartStore } from "../../store/cartStore";

import { type JSX } from "react";
import UserButton from "../button/UserButton";

export default function NavbarLayout({ children }: { children: JSX.Element }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const items = useCartStore((state) => state.items);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

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
            <Indicator
              label={count}
              size={16}
              color="red"
              disabled={count === 0}
              withBorder
            >
              <ActionIcon
                component="a"
                href="/checkout"
                variant="light"
                size="lg"
              >
                <IconShoppingCart size={18} />
              </ActionIcon>
             
            </Indicator>
             <UserButton />
          </Group>

          {/* Mobile Burger */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
