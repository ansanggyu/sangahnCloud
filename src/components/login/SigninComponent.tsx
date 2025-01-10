import { useState, useEffect, ChangeEvent } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Checkbox } from "../ui/checkbox.tsx";
import { useNavigate, useLocation } from "react-router-dom";
import useSignin from "../../hooks/useSignin.ts"; // useSignin 훅을 가져옴

const initialState = {
    userId: "",
    password: "",
};

function SigninComponent() {
    const [param, setParam] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [rememberId, setRememberId] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { doSignin } = useSignin(); // doSignin 훅 호출

    useEffect(() => {
        const savedId = localStorage.getItem("rememberedId");
        if (savedId) {
            setParam((prev) => ({ ...prev, userId: savedId }));
            setRememberId(true); // 로컬 스토리지에 저장된 ID가 있으면 체크박스를 선택 상태로 유지
        }

        const searchParams = new URLSearchParams(location.search);
        const errorType = searchParams.get("error");

        if (errorType === "all" && !errorMessage) {
            setErrorMessage("로그인 세션이 만료되었습니다. 다시 로그인 해주세요.");
        } else if (errorType === "incorrect" && !errorMessage) {
            setErrorMessage("아이디나 패스워드가 틀립니다. 다시 로그인 해주세요.");
        }
    }, [location.search, errorMessage]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setParam((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            console.log("로그인 요청 데이터:", param);

            // doSignin 호출 및 Thunk 응답 확인
            const response = await doSignin(param);

            console.log("로그인 성공:", response);

            // "아이디 저장"이 선택되었으면 로컬 스토리지에 userId 저장
            if (rememberId) {
                localStorage.setItem("rememberedId", param.userId);
            } else {
                localStorage.removeItem("rememberedId");
            }

            // 로그인 성공 후, 메인 페이지로 리디렉션
            navigate("/main");
        } catch (exception) {
            console.error("로그인 실패:", exception);
            setErrorMessage("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
        }
    };

    const toggleRememberId = () => {
        setRememberId((prev) => !prev);
    };

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
                <VStack align="stretch">
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
                        클라우드 인증 로그인
                    </Text>

                    {errorMessage && (
                        <Text color="red.500" textAlign="center">
                            {errorMessage}
                        </Text>
                    )}

                    <form>
                        <VStack align="stretch">
                            <Input
                                type="text"
                                name="userId"
                                placeholder="아이디"
                                value={param.userId}
                                onChange={handleChange}
                                borderColor="gray.300"
                                _focus={{ borderColor: "blue.500" }}
                                required
                                size="lg"
                            />

                            <Input
                                type="password"
                                name="password"
                                placeholder="패스워드"
                                value={param.password}
                                onChange={handleChange}
                                borderColor="gray.300"
                                _focus={{ borderColor: "blue.500" }}
                                required
                                size="lg"
                            />

                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Checkbox
                                    colorScheme="blue"
                                    size="lg"
                                    isChecked={rememberId}
                                    onChange={toggleRememberId}
                                />
                                <Text fontWeight="bold" color="blackAlpha.950">
                                    아이디 저장
                                </Text>
                            </Box>

                            <Button
                                colorScheme="blue"
                                width="full"
                                size="lg"
                                onClick={handleClick}
                                _hover={{ transform: "scale(1.05)" }}
                            >
                                로그인
                            </Button>
                        </VStack>
                    </form>
                </VStack>
            </Box>
        </Box>
    );
}

export default SigninComponent;
