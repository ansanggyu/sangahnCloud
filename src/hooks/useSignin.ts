import { useAppDispatch, useAppSelector } from "./rtk.ts";
import { postSigninThunk, signout } from "../slices/signinSlice.ts";
import { Cookies } from "react-cookie";
import {ISigninParam} from "../types/ilogin.ts";

const cookies = new Cookies();

const useSignin = () => {
    const dispatch = useAppDispatch();
    const login = useAppSelector((state) => state.signin);

    const doSignin = async (param: ISigninParam) => {
        try {
            console.log("doSignin 호출: ", param);
            const data = await dispatch(postSigninThunk(param)).unwrap();
            console.log("Thunk unwrap 결과: ", data);

            cookies.set("userlogin", data, { path: "/" });
            return data;
        } catch (error: unknown) {
            console.error("useSignin.ts failed:", error);
            throw error;
        }
    };

    const doSignout = () => {
        console.log("doSignout 호출");
        dispatch(signout());
        cookies.remove("userlogin", { path: "/" });
    };

    return { login, doSignin, doSignout };
};

export default useSignin;
