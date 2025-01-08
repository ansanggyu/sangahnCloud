import { Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";

function ColorModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button onClick={toggleTheme} colorScheme="blue">
            {theme === "dark" ? "라이트 모드" : "다크 모드"}
        </Button>
    );
}

export default ColorModeToggle;
