import { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const UserInfoPage = lazy(() => import("../pages/setting/UserInfoPage.tsx"));
const ThemePage = lazy(() => import("../pages/setting/ThemePage.tsx"));

const SettingsRouter = {
    path: "/settings",
    children: [
        {
            path: "user-info",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <UserInfoPage />
                </Suspense>
            ),
        },
        {
            path: "theme",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <ThemePage />
                </Suspense>
            ),
        },
    ],
};

export default SettingsRouter;
