import { Anchor, Group } from '@mantine/core';

const categories = [
  { label: 'Electronics', href: '/categories/electronics' },
  { label: 'Fashion', href: '/categories/fashion' },
  { label: 'Home & Kitchen', href: '/categories/home-kitchen' },
  { label: 'Books', href: '/categories/books' },
  { label: 'Sports', href: '/categories/sports' },
];

export default function Categories() {
  return (
      <Group gap="lg" justify='center'>
        {categories.map((cat) => (
          <Anchor
            key={cat.href}
            href={cat.href}
            c="text"
            underline="hover"
          >
            {cat.label}
          </Anchor>
        ))}
      </Group>
  );
}