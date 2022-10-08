import { Card, Group, Text, Checkbox } from "@mantine/core";

interface ItemCardProps {
  itemIndex: number;
  onChange: (isChecked: boolean, itemIndex: number) => void;
  isChecked: boolean;
}

// eslint-disable-next-line react/display-name
export const ItemCard = ({ itemIndex, onChange, isChecked }: ItemCardProps) => {
  return (
    <Card
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
      key={itemIndex}
      onClick={() => onChange(!isChecked, itemIndex)}
      data-testid="card-item"
    >
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Item number {itemIndex}</Text>
        <Checkbox
          checked={isChecked}
          onChange={() => onChange(!isChecked, itemIndex)}
        />
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
    </Card>
  );
};
