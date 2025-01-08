import React, { useState } from "react";
import {
    Box,
    Grid,
    Heading,
    Text,
    Button,
    VStack,
} from "@chakra-ui/react";
import BasicLayout from "../../components/layouts/BasicLayout.tsx";

function MainPage() {

    const [folders, setFolders] = useState<string[]>(["폴더 1", "폴더 2"]);
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number; folder: string | null } | null>(
        null
    );

    const handleRightClick = (e: React.MouseEvent, folder: string) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY, folder });
    };

    const handleCloseMenu = () => {
        setContextMenu(null);
    };

    const handleAddFolder = () => {
        const folderName = `새 폴더 ${folders.filter((f) => f.startsWith("새 폴더")).length + 1}`;
        setFolders([...folders, folderName]);
    };

    const handleRenameFolder = () => {
        const newName = prompt("새 폴더 이름을 입력하세요", contextMenu?.folder || "");
        if (newName && contextMenu?.folder) {
            setFolders((prev) =>
                prev.map((folder) => (folder === contextMenu.folder ? newName : folder))
            );
        }
        handleCloseMenu();
    };

    const handleDeleteFolder = () => {
        if (contextMenu?.folder) {
            setFolders((prev) => prev.filter((folder) => folder !== contextMenu.folder));
        }
        handleCloseMenu();
    };

    return (
        <BasicLayout>
            <Heading as="h2" size="md" mb={4} color="blackAlpha.950">
                내 파일
            </Heading>
            <Button colorScheme="blue" onClick={handleAddFolder} mb={4}>
                폴더 추가
            </Button>

            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {folders.map((folder, index) => (
                    <Box
                        key={index}
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="md"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        onContextMenu={(e) => handleRightClick(e, folder)}
                    >
                        <Text fontWeight="bold" color="blackAlpha.950">
                            {folder}
                        </Text>
                    </Box>
                ))}
            </Grid>

            {/* 컨텍스트 메뉴 */}
            {contextMenu && (
                <Box
                    position="absolute"
                    top={`${contextMenu.y}px`}
                    left={`${contextMenu.x}px`}
                    bg="white"
                    boxShadow="md"
                    borderRadius="md"
                    zIndex="10"
                    onClick={handleCloseMenu}
                >
                    <VStack align="start" p={2}>
                        <Button variant="ghost" size="sm" onClick={handleRenameFolder}>
                            이름 변경
                        </Button>
                        <Button variant="ghost" size="sm" onClick={handleDeleteFolder}>
                            삭제
                        </Button>
                    </VStack>
                </Box>
            )}

            {/* 메뉴 외부 클릭 시 닫기 */}
            {contextMenu && (
                <Box
                    position="fixed"
                    top="0"
                    left="0"
                    width="100vw"
                    height="100vh"
                    zIndex="5"
                    onClick={handleCloseMenu}
                />
            )}
        </BasicLayout>
    );
}

export default MainPage;
