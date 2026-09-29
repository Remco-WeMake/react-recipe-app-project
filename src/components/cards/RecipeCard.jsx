import {
  Tag,
  Image,
  Heading,
  Stack,
  Flex,
  Group,
  Stat,
} from "@chakra-ui/react";

export const RecipeCard = ({ item, setSelectedRecipe }) => {
  // const veganLabels = item.healthLabels.filter("Vegan", "Vegetarian");
  // console.log(veganLabels);

  return (
    <Flex
      onClick={() => {
        setSelectedRecipe(item);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      direction={{ base: "column-reverse", md: "row" }}
      gap={"24px"}
      justify={"space-between"}
      p={"12px"}
      borderRadius="3xl"
      bg="#fff"
      cursor="pointer"
    >
      <Stack gap="24px" p="12px" flexGrow={1}>
        <Stack gap="8px">
          {item.dietLabels.length != 0 || item.cautions.length != 0 ?
            <Flex gap="8px" flexWrap="wrap">
              {item.dietLabels.map((dietLabel) => (
                <Tag.Root
                  borderRadius="100vw"
                  size="sm"
                  bg="#173d1a"
                  color="#f7f2eb"
                  fontWeight={600}
                  px="8px"
                  variant="solid"
                  key={dietLabel}
                >
                  <Tag.Label fontSize={"0.625rem"}>{dietLabel}</Tag.Label>
                </Tag.Root>
              ))}
              {item.cautions.map((caution) => (
                <Tag.Root
                  borderRadius="100vw"
                  size="sm"
                  color="#c83d24"
                  shadowColor="#c83d24"
                  fontWeight={600}
                  px="8px"
                  variant="outline"
                  key={caution}
                >
                  <Tag.Label fontSize={"0.625rem"}>{caution}</Tag.Label>
                </Tag.Root>
              ))}
            </Flex>
          : ""}
          <Heading
            as="h2"
            color="#173d1a"
            fontSize={"1.875rem"}
            lineHeight={"120%"}
            fontWeight="600"
          >
            {item.label}
          </Heading>
        </Stack>

        <Flex mt="auto">
          <Stat.Root>
            <Stat.Label
              color={"#173d1ac0"}
              fontSize="0.625rem"
              textTransform={"uppercase"}
              lineHeight={1}
            >
              Meal type
            </Stat.Label>
            <Stat.ValueText color={"#173d1a"} fontSize={"1rem"}>
              {item.mealType}
            </Stat.ValueText>
          </Stat.Root>
          <Stat.Root>
            <Stat.Label
              color={"#183f1bc0"}
              fontSize="0.625rem"
              textTransform={"uppercase"}
              lineHeight={1}
            >
              Dish type
            </Stat.Label>
            <Stat.ValueText color={"#173d1a"} fontSize={"1rem"}>
              {item.dishType}
            </Stat.ValueText>
          </Stat.Root>
        </Flex>
      </Stack>

      <Group
        position={"relative"}
        h={{ base: "256px", md: "100%" }}
        minH="256px"
        aspectRatio={"1/1"}
        borderRadius="2xl"
        overflow={"hidden"}
        alignItems={"flex-end"}
        flexShrink={0}
      >
        <Image
          src={item.image}
          position={"absolute"}
          minH="100%"
          inset={0}
          zIndex={-1}
        ></Image>

        <Flex gap="8px" p="8px" flexWrap="wrap" mt="16px">
          {item.healthLabels.map((healtLabel) =>
            healtLabel === "Vegan" || healtLabel === "Vegetarian" ?
              <Tag.Root
                size="lg"
                bg="#f7f2eb"
                color="#173d1a"
                fontWeight={600}
                variant="solid"
                key={healtLabel}
              >
                <Tag.Label>{healtLabel}</Tag.Label>
              </Tag.Root>
            : "",
          )}
        </Flex>
      </Group>
    </Flex>
  );
};
