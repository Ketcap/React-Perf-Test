import { Container, Stack } from "@mantine/core";
import type { NextPage } from "next";
import { memo, useState } from "react";
import { ItemCard } from "../component/ItemCard";

const items = new Array(500).fill("");

const ItemCardMemod = memo(ItemCard);

const Page: NextPage = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const onChange = (isChecked: boolean, index: number) => {
    setCheckedItems((prev) =>
      isChecked ? [...prev, index] : prev.filter((item) => item !== index)
    );
  };

  // useEffect(() => {
  //   console.log("On Change Changed");
  // }, [onChange]);

  return (
    <Container>
      <Stack>
        {items.map((_, index) => (
          <ItemCardMemod
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

export default Page;
