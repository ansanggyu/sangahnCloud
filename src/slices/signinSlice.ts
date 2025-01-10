import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Ilogin, ISigninParam} from "../types/ilogin.ts";
import {postSignin} from "../services/login/loginAPI.ts";

const initialState: Ilogin = {
    userId: '', // 초기값 유지
    password: '',
    accessToken: '',
    refreshToken: '',
    username: '',
    loading: false
};


// 로그인 API 호출
export const postSigninThunk = createAsyncThunk<Ilogin, ISigninParam>(
    "signin/postSigninThunk",
    async (params, thunkAPI) => {
        try {
            const response = await postSignin(params);
            console.log("postSigninThunk API Response:", response); // API 응답 로그
            return response; // API 응답 반환
        } catch (error) {
            console.error("postSigninThunk Error:", error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const signinSlice = createSlice({
    name: "signin",
    initialState,
    reducers: {
        signin: (state, action) => {
            console.log("Signin Action Dispatched:", action.payload);
            const { userId, password, accessToken, refreshToken, username } = action.payload;

            // 상태 갱신
            state.userId = userId || state.userId;
            state.password = password || state.password;
            state.accessToken = accessToken || state.accessToken;
            state.refreshToken = refreshToken || state.refreshToken;
            state.username = username || state.username;

            console.log("Updated State (signin):", state);
        },
        signout: () => {
            console.log("Signout Action Dispatched");
            return { ...initialState }; // 상태 초기화
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postSigninThunk.fulfilled, (state, action) => {
                console.log("postSigninThunk.fulfilled Action Payload:", action.payload);

                if (action.payload) {
                    const { userId, password, accessToken, refreshToken, username } = action.payload;
                    state.userId = userId;
                    state.password = password;
                    state.accessToken = accessToken;
                    state.refreshToken = refreshToken;
                    state.username = username;
                }

                console.log("Updated State (fulfilled):", state);
            })
            .addCase(postSigninThunk.pending, (state) => {
                console.log("postSigninThunk.pending");
                state.loading = true;
            })
            .addCase(postSigninThunk.rejected, (_state, action) => {
                console.error("postSigninThunk.rejected:", action.error.message);
            });
    }
});

// 액션 내보내기
export const { signin, signout } = signinSlice.actions;

// 리듀서 내보내기
export default signinSlice.reducer;
