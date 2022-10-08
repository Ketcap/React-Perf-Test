import { Container, Stack } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { ItemCard } from "../component/ItemCard";

const items = new Array(500).fill("");

const Home: NextPage = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const onChange = (isChecked: boolean, index: number) => {
    setCheckedItems((prev) =>
      isChecked ? [...prev, index] : prev.filter((item) => item !== index)
    );
  };
  return (
    <Container>
      <Stack>
        {items.map((_, index) => (
          <ItemCard
            key={index}
            itemIndex={index}
            onChange={onChange}
            isChecked={checkedItems.includes(index)}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
