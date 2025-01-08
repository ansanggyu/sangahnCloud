import { VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface SubMenuProps {
    name: string;
    toPath: string;
}

interface Depth2MenuProps {
    subMenus: SubMenuProps[];
    basicPath: string;
}

function TwoDepthMenu({ subMenus, basicPath }: Depth2MenuProps) {
    return (
        <VStack align="start" pl={4}>
            {subMenus.map((menu, idx) => (
                <Button
                    key={idx}
                    as={Link}
                    to={`${basicPath}${menu.toPath}`}
                    variant="ghost"
                    size="sm"
                    justifyContent="start"
                    color="gray.600"
                    _hover={{ bg: "blue.50", color: "blue.600" }}>
                    {menu.name}
                </Button>
            ))}
        </VStack>
    );
}

export default TwoDepthMenu;
