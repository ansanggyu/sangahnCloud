import {Box, Button, Heading, Input, Text, VStack} from '@chakra-ui/react';
import { Checkbox } from "@/components/ui/checkbox";

function SigninComponent() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bg="gray.100"
            p={6}
        >
            <Box
                bg="white"
                p={8}
                rounded="2xl"
                boxShadow="lg"
                width={{ base: "full", sm: "lg" }}
                maxWidth="400px"
            >
                <Heading as="h1" size="4xl" textAlign="center" mb={6} color="blackAlpha.950">
                    클라우드 인증 로그인
                </Heading>

                <form>
                    <VStack align="stretch">
                        {/* 아이디 입력 */}
                        <Input
                            type="text"
                            name="creatorId"
                            placeholder="아이디"
                            borderColor="gray.300"
                            _focus={{ borderColor: 'blue.500' }}
                            required
                            size="lg"
                            p={4}
                            fontSize="lg"
                        />

                        {/* 패스워드 입력 */}
                        <Input
                            type="password"
                            name="creatorPassword"
                            placeholder="패스워드"
                            borderColor="gray.300"
                            _focus={{ borderColor: 'blue.500' }}
                            required
                            size="lg"
                            p={4}
                            fontSize="lg"
                        />

                        <Text fontWeight="bold" color="blackAlpha.950">아이디 저장</Text>
                        <Checkbox colorScheme="blue" size="lg" defaultChecked/>

                        {/* 로그인 버튼 */}
                        <Button
                            colorScheme="blue"
                            width="full"
                            size="lg"
                            _hover={{ transform: "scale(1.05)" }}
                            mt={4}
                            py={6}
                            fontSize="lg"
                            boxShadow="md"
                        >
                            로그인
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Box>
    );
}

export default SigninComponent;
