import {
  Card,
  Stack,
  Select,
  NumberInput,
  Button,
  Title,
} from "@mantine/core";

type Props = {
  categories: string[];
  category: string | null;
  setCategory: (value: string | null) => void;

  minPrice: number | undefined;
  setMinPrice: (value: number | undefined) => void;

  maxPrice: number | undefined;
  setMaxPrice: (value: number | undefined) => void;

  applyFilters: () => void;
  clearFilters: () => void;
};

export default function ProductFilters({
  categories,
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  applyFilters,
  clearFilters,
}: Props) {
  return (
    <Card shadow="sm" p="md" withBorder radius="md">
      <Title order={4} mb="md">
        Filters
      </Title>

      <Stack>
        <Select
          label="Category"
          placeholder="Select category"
          data={categories}
          value={category}
          onChange={setCategory}
          clearable
        />

        <NumberInput
          label="Min Price"
          placeholder="0"
          value={minPrice}
          onChange={(value) => setMinPrice(Number(value) || undefined)}
        />

        <NumberInput
          label="Max Price"
          placeholder="1000"
          value={maxPrice}
          onChange={(value) => setMaxPrice(Number(value) || undefined)}
        />

        <Button onClick={applyFilters}>Apply Filters</Button>

        <Button variant="outline" color="red" onClick={clearFilters}>
          Clear Filters
        </Button>
      </Stack>
    </Card>
  );
}