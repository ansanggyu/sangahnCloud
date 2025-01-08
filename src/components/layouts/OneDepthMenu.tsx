import { useState } from "react";
import { Box, Button, VStack } from "@chakra-ui/react";
import TwoDepthMenu from "./TwoDepthMenu";

interface SubMenuProps {
    name: string;
    toPath: string;
}

interface Depth1MenuProps {
    mainName: string;
    subMenus: SubMenuProps[];
    basicPath: string;
}

function OneDepthMenu({ mainName, subMenus, basicPath }: Depth1MenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box width="100%">
            <Button
                width="100%"
                justifyContent="space-between"
                bg="gray.100"
                _hover={{ bg: "blue.50", color: "blue.600" }}
                color="gray.700"
                onClick={() => setIsOpen(!isOpen)}
            >
                {mainName}
            </Button>
            {isOpen && (
                <VStack align="start" pl={4} mt={2} >
                    <TwoDepthMenu subMenus={subMenus} basicPath={basicPath} />
                </VStack>
            )}
        </Box>
    );
}

export default OneDepthMenu;
