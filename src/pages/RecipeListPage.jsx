import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/cards/RecipeCard";
import { Grid, Heading, Input, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const [foundRecipes, setFoundRecipes] = useState(data.hits);

  const searchRecipes = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchResults = data.hits.filter((hit) => {
      const matchesLabel = hit.recipe.label.toLowerCase().includes(searchTerm);

      const matchesHealthLabel = hit.recipe.healthLabels.some((healthLabel) =>
        healthLabel.toLowerCase().includes(searchTerm),
      );

      return matchesLabel || matchesHealthLabel;
    });

    setFoundRecipes(searchResults);
  };

  return (
    <Stack mb="auto" gap="80px">
      <Stack align={"center"} gap="32px">
        <Heading
          as="h1"
          color={useColorModeValue("#173d1a", "#f7f2eb")}
          fontSize={"2.5rem"}
          lineHeight={"120%"}
          fontWeight="600"
          textAlign={"center"}
        >
          What recipe are you looking for?
        </Heading>
        <Input
          type="text"
          placeholder="Search by name or health label"
          size="lg"
          variant={"subtle"}
          maxW={"960px"}
          backgroundColor={"#fff"}
          color="#173d1a"
          borderRadius={"100dvw"}
          onChange={searchRecipes}
        ></Input>
      </Stack>
      <Grid
        gap="20px"
        gridTemplateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
      >
        {foundRecipes.length > 0 ?
          foundRecipes.map((foundRecipe) => (
            <RecipeCard
              key={foundRecipe.recipe.label}
              item={foundRecipe.recipe}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))
        : ""}
      </Grid>
    </Stack>
  );
};
