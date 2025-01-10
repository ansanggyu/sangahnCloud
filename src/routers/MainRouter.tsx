import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import StorageRouter from "./StorageRouter";
import TrashRouter from "./TrashRouter";
import SecurityRouter from "./SecurityRouter";
import ShareRouter from "./ShareRouter";
import SettingsRouter from "./SettingRouter.tsx";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const MainPage = lazy(() => import("../pages/main/MainPage.tsx"));
const LoginPage = lazy(() => import("../pages/login/LoginPage.tsx"));

export const Loading = <LoadingPage />;

const MainRouter = createBrowserRouter([
    {
        path: "/main",
        element: <Suspense fallback={Loading}><MainPage /></Suspense>,
    },
    {
        path: "/",
        element: <Navigate to="/login" replace={true} />,
    },
    {
        path: "/login",
        element: <Suspense fallback={Loading}><LoginPage /></Suspense>,
    },
    StorageRouter,
    TrashRouter,
    SecurityRouter,
    ShareRouter,
    SettingsRouter
]);

export default MainRouter;
