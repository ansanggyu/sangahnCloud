import { Box, Button, Text } from "@chakra-ui/react";
import BasicLayout from "@/components/layouts/BasicLayout.tsx";
import {useColorMode} from "@/components/ui/color-mode.tsx";

export default function ThemePage() {
    const { colorMode, toggleColorMode } = useColorMode(); // Chakra UI 다크모드 훅

    return (
        <BasicLayout>
            <Box textAlign="center" py={10}>
                <Text fontSize="xl" mb={4}>
                    현재 테마: <strong>{colorMode === "light" ? "라이트 모드" : "다크 모드"}</strong>
                </Text>
                <Button colorScheme="blue" onClick={toggleColorMode}>
                    {colorMode === "light" ? "다크 모드로 변경" : "라이트 모드로 변경"}
                </Button>
            </Box>
        </BasicLayout>
    );
}
