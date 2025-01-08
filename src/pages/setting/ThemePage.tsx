import { Box, Text } from "@chakra-ui/react";
import {useColorMode} from "../../components/ui/color-mode.tsx";
import BasicLayout from "../../components/layouts/BasicLayout.tsx";
import ColorModeToggle from "../../components/ui/color-mode-toggle.tsx";



export default function ThemePage() {
    const { colorMode } = useColorMode(); // Chakra UI 다크모드 훅

    return (
        <BasicLayout>
            <Box textAlign="center" py={10}>
                <Text fontSize="xl" mb={4}>
                    현재 테마: <strong>{colorMode === "light" ? "라이트 모드" : "다크 모드"}</strong>
                </Text>
                <ColorModeToggle />
            </Box>
        </BasicLayout>
    );
}
