// Color inspiration: https://www.behance.net/gallery/166556023/Florentine-Trattoria-Italian-Restaurant-Branding?tracking_source=search_projects%7Crestaurant+brand+identity&l=30&utm_source=Pinterest&utm_medium=organic

import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSinglePage } from "./pages/RecipeSinglePage";
import { Header } from "./components/Header";
import { Center, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Stack background={useColorModeValue("#f7f2eb", "#173d1a")}>
      <Header />
      <Center
        my={{
          base: "48px",
          md: "80px",
          xl: "128px",
        }}
        px="24px"
        mx="auto"
        w={"100%"}
        minH="100dvh"
        maxW="1440px"
      >
        {selectedRecipe ?
          <RecipeSinglePage
            item={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
          />
        : <RecipeListPage setSelectedRecipe={setSelectedRecipe} />}
      </Center>
    </Stack>
  );
};
