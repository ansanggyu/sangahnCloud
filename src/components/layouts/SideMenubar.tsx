import {Box, Button, Text} from "@chakra-ui/react";
import OneDepthMenu from "./OneDepthMenu";
import DecorativeBox from "@/components/ui/DecorativeBox.tsx";
import {Link} from "react-router-dom";

const menus = [
    {
        mainName: "저장용량",
        subMenus: [{ name: "저장용량 확인하기", toPath: "/volume" }],
        basicPath: "/storage",
    },
    {
        mainName: "휴지통",
        subMenus: [{ name: "휴지통 확인하기", toPath: "" }],
        basicPath: "/trash",
    },
    {
        mainName: "보안 설정",
        subMenus: [
            { name: "파일 잠금", toPath: "/lock" },
            { name: "다운로드 제한", toPath: "/download-limit" },
            { name: "허용된 IP 관리", toPath: "/ip-management" },
        ],
        basicPath: "/security",
    },
    {
        mainName: "파일 공유",
        subMenus: [
            { name: "QR 코드 생성", toPath: "/qr-code" },
            { name: "만료 링크 설정", toPath: "/expiry-link" },
            { name: "다운로드 제한", toPath: "/download-limit" },
        ],
        basicPath: "/share",
    },
    {
        mainName: "설정",
        subMenus: [
            { name: "사용자 정보", toPath: "/user-info" },
            { name: "테마 변경", toPath: "/theme" },
            { name: "로그아웃", toPath: "/logout" },
        ],
        basicPath: "/settings",
    },
];

function SideMenubar() {
    return (
        <Box
            bg="white"
            width="250px"
            p={4}
            borderRadius="md"
            boxShadow="md"
            position="sticky"
            top="20px"
        >
            <Button
                as={Link}
                to={`/main`}
                variant="ghost"
                size="sm"
                justifyContent="start"
                color="gray.600"
                _hover={{ bg: "blue.50", color: "blue.600" }}>
                <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.600">
                    메뉴
                </Text>
            </Button>

            {/* 메뉴 리스트 */}
            <Box>
                {menus.map((menu, idx) => (
                    <Box key={idx} mb={4}>
                        <OneDepthMenu {...menu} />
                        {/* DecorativeBox로 구분선 추가 */}
                        <DecorativeBox
                            width="100%"
                            height="1px"
                            bg="gray.300"
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default SideMenubar;
