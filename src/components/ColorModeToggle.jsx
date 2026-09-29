import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./ThemeIcons";

export function ColorModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Figure out which theme is currently active
  const current = theme ?? resolvedTheme;
  const isActive = (mode) => {
    return current === mode;
  };

  return (
    <ButtonGroup
      gap={"12px"}
      background={isActive("light") ? "#fff" : "#173d1a"}
      border="1px solid #f7f2eb"
      borderRadius={"8px"}
      w={"fit"}
      p={"8px"}
      size="sm"
      aria-label="Theme toggle"
    >
      <Button
        px="0"
        color="#f7f2eb"
        background={isActive("light") ? "#173d1a" : "transparant"}
        variant={
          isActive("light") ?
            "solid" // if the light theme is active
          : "ghost" // otherwise
        }
        _hover={
          isActive("light") ? undefined : (
            {
              _light: { color: "#173d1a" }, // in light mode
              _dark: { color: "#f7f2eb" }, // in dark mode
            }
          )
        }
        aria-label="Licht thema"
        title="Licht thema"
        onClick={() => setTheme("light")}
      >
        <SunIcon />
      </Button>
      <Button
        px="0"
        color="#173d1a"
        variant={
          isActive("dark") ?
            "solid" // if the dark theme is active
          : "ghost" // otherwise
        }
        _hover={
          isActive("dark") ? undefined : (
            {
              _light: { color: "#173d1a" }, // in light mode
              _dark: { color: "#f7f2eb" }, // in dark mode
            }
          )
        }
        aria-label="Donker thema"
        title="Donker thema"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon />
      </Button>
    </ButtonGroup>
  );
}
