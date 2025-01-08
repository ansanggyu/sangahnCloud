import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import BasicLayout from "@/components/layouts/BasicLayout.tsx";

function MainPage() {
    return (
        <BasicLayout>
            {/* 추천 파일 */}
            <Heading as="h2" size="md" mb={4} color="blackAlpha.950">내 파일</Heading>

            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {["폴더 1", "폴더 2", "파일 1", "파일 2", "파일 3"].map((item, index) => (
                    <Box
                        key={index}
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="md"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Text fontWeight="bold" color="blackAlpha.950">{item}</Text>
                    </Box>
                ))}
            </Grid>

        </BasicLayout>
    );
}

export default MainPage;
