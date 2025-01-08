import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import Sidebar from "./SideMenubar";

function BasicLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box bg="gray.50" minHeight="100vh">
            {/* 상단 네비게이션 바 */}
            <Flex justify="space-between" align="center" bg="white" p={4} boxShadow="md">
                <Heading as="h1" size="md" color="blue.600">
                    Drive에 오신 것을 환영합니다
                </Heading>
                <Input
                    placeholder="드라이브에서 검색"
                    width="300px"
                    bg="gray.100"
                    borderRadius="md"
                    size="sm"
                />
            </Flex>

            <Flex>
                {/* 사이드바 */}
                <Sidebar />

                {/* 메인 콘텐츠 */}
                <Box flex="1" p={6}>
                    {children}
                </Box>
            </Flex>
        </Box>
    );
}

export default BasicLayout;
