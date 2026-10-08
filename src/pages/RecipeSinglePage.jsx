import {
  Stack,
  Heading,
  Stat,
  Grid,
  Image,
  Text,
  List,
  GridItem,
  Button,
  Table,
  Flex,
  Tag,
  Group,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

export const RecipeSinglePage = ({ item, setSelectedRecipe }) => {
  const baseNutrientKeys = [
    "ENERC_KCAL",
    "FAT",
    "PROCNT",
    "CHOCDF",
    "CHOLE",
    "NA",
  ];

  const filteredNutrients = baseNutrientKeys
    .map((key) => item.totalNutrients[key])
    .filter(Boolean);

  return (
    <Stack mb="auto" gap={"80px"}>
      <Button
        variant={"plain"}
        w={"fit"}
        color={useColorModeValue("#173d1a", "#f7f2eb")}
        _hover={{ color: useColorModeValue("#173d1abf", "#f7f2ebbf") }}
        onClick={() => setSelectedRecipe(null)}
      >
        ← Alle recepten
      </Button>
      <Grid
        rowGap={"8px"}
        columnGap={"40px"}
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gridTemplateRows={{
          base: "repeat(4, auto)",
          md: "repeat(3, auto)",
          xl: "repeat(2, auto)",
        }}
      >
        {/* Ingredients */}
        <GridItem
          rowStart={{ base: 1, md: 2, xl: 1 }}
          mb={"40px"}
          colStart={{ xl: 2 }}
        >
          <List.Root>
            {item.ingredientLines.map((ingredientLine) => (
              <List.Item
                color={useColorModeValue("#c83d24", "#efc16d")}
                fontWeight={600}
                mt={"4px"}
                fontSize={"0.875rem"}
                key={ingredientLine}
                listStyle={"none"}
                textAlign={"right"}
              >
                {ingredientLine}
              </List.Item>
            ))}
          </List.Root>
        </GridItem>
        {/* Image and Heading */}
        <GridItem colStart={{ md: 2, xl: 1 }} gap={"24px"}>
          <Image src={item.image} h="192px" w="192px"></Image>
          <Heading
            mt={"28px"}
            as="h1"
            color={useColorModeValue("#173d1a", "#f7f2eb")}
            fontSize={"1.875rem"}
            lineHeight={"140%"}
            fontWeight="600"
            textTransform={"uppercase"}
            textWrap={"balance"}
          >
            {item.label}
          </Heading>
        </GridItem>
        {/* Labels and Nutrients */}
        <GridItem colStart={{ md: 2, xl: 3 }} rowSpan={2} gap={"24px"}>
          <Text
            color={useColorModeValue("#173d1a", "#f7f2eb")}
            lineHeight={"180%"}
          >
            {"Health label(s): "}
            {item.healthLabels.map((healtLabel) => healtLabel + ", ")}
          </Text>
          <Text
            mt={"12px"}
            color={useColorModeValue("#173d1a", "#f7f2eb")}
            lineHeight={"180%"}
          >
            {"Diet label(s): "}
            {item.dietLabels.map((dietLabel) => dietLabel + ", ")}
          </Text>
          <Text
            mt={"12px"}
            color={useColorModeValue("#173d1a", "#f7f2eb")}
            lineHeight={"180%"}
          >
            {"Caution(s): "}
            {item.cautions.map((caution) => caution + ", ")}
          </Text>

          <Table.Root
            color={useColorModeValue("#173d1a", "#f7f2eb")}
            mt={"32px"}
            interactive
          >
            <Table.Body>
              {filteredNutrients.map((filteredNutrientsItem) => (
                <Table.Row
                  backgroundColor={useColorModeValue("#f7f2eb", "#173d1a")}
                  _hover={{
                    backgroundColor: useColorModeValue(
                      "#ffffff99",
                      "#ffffff0e",
                    ),
                  }}
                  key={filteredNutrientsItem.label}
                >
                  <Table.Cell
                    pl={0}
                    w="33%"
                    fontWeight={600}
                    textTransform={"uppercase"}
                    fontSize={"0.75rem"}
                    borderColor={useColorModeValue("#173d1a", "#f7f2eb ")}
                  >
                    {filteredNutrientsItem.label}
                  </Table.Cell>
                  <Table.Cell
                    borderColor={useColorModeValue("#173d1a", "#f7f2eb ")}
                  >
                    {filteredNutrientsItem.quantity.toFixed(1)
                      + " "
                      + filteredNutrientsItem.unit}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </GridItem>
        {/* Time, Servings and Meal and Dish type */}
        <GridItem
          rowStart={{ base: 5, md: 1, xl: 2 }}
          mt={{ base: "40px", md: "0px", xl: "40px" }}
          alignSelf={{ xl: "end" }}
        >
          {item.totalTime || item.yield ?
            <Group>
              {item.totalTime ?
                <Tag.Root
                  variant={"outline"}
                  mb={"40px"}
                  borderRadius={"100dvw"}
                  shadowColor={useColorModeValue("#173d1a80", "#f7f2eb80")}
                >
                  <Tag.Label
                    color={useColorModeValue("#173d1a", "#f7f2eb")}
                    fontWeight={400}
                    fontSize={"0.875rem"}
                    listStyle={"none"}
                    textAlign={"right"}
                    textTransform={"uppercase"}
                  >
                    {item.totalTime + " Minutes"}
                  </Tag.Label>
                </Tag.Root>
              : ""}

              {item.yield ?
                <Tag.Root
                  variant={"outline"}
                  mb={"40px"}
                  borderRadius={"100dvw"}
                  shadowColor={useColorModeValue("#173d1a80", "#f7f2eb80")}
                >
                  <Tag.Label
                    color={useColorModeValue("#173d1a", "#f7f2eb")}
                    fontWeight={400}
                    fontSize={"0.875rem"}
                    listStyle={"none"}
                    textAlign={"right"}
                    textTransform={"uppercase"}
                  >
                    {item.yield + " Servings"}
                  </Tag.Label>
                </Tag.Root>
              : ""}
            </Group>
          : ""}
          <Flex>
            <Stat.Root>
              <Stat.Label
                color={useColorModeValue("#c83d24", "#efc16d")}
                fontWeight={600}
                textTransform={"uppercase"}
                fontSize={".75rem"}
              >
                Meal type
              </Stat.Label>
              <Stat.ValueText
                color={useColorModeValue("#173d1a", "#f7f2eb")}
                fontSize={"1.5rem"}
                textTransform={"capitalize"}
              >
                {item.mealType}
              </Stat.ValueText>
            </Stat.Root>
            <Stat.Root>
              <Stat.Label
                color={useColorModeValue("#c83d24", "#efc16d")}
                fontWeight={600}
                textTransform={"uppercase"}
                fontSize={".75rem"}
              >
                Dish type
              </Stat.Label>
              <Stat.ValueText
                color={useColorModeValue("#173d1a", "#f7f2eb")}
                fontSize={"1.5rem"}
                textTransform={"capitalize"}
              >
                {item.dishType}
              </Stat.ValueText>
            </Stat.Root>
          </Flex>
        </GridItem>
      </Grid>
    </Stack>
  );
};
