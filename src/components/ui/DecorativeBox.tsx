import { Box } from "@chakra-ui/react";

interface DecorativeBoxProps {
    width?: string | number;
    height?: string | number;
    bg?: string;
    borderRadius?: string | number;
}

const DecorativeBox: React.FC<DecorativeBoxProps> = ({
                                                         width = "100%",
                                                         height = "5px",
                                                         bg = "blue.500",
                                                         borderRadius = "md",
                                                         ...props
                                                     }) => {
    return <Box width={width} height={height} bg={bg} borderRadius={borderRadius} {...props} />;
};

export default DecorativeBox;
