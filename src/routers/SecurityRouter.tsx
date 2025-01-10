import { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const FileLockPage = lazy(() => import("../pages/securityconfig/FileLockPage.tsx"));
const DownloadLimitPage = lazy(() => import("../pages/securityconfig/DownloadLimitPage.tsx"));
const IPManagementPage = lazy(() => import("../pages/securityconfig/IPManagementPage.tsx"));

const SecurityRouter = {
    path: "/security",
    children: [
        {
            path: "lock",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <FileLockPage />
                </Suspense>
            ),
        },
        {
            path: "download-limit",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <DownloadLimitPage />
                </Suspense>
            ),
        },
        {
            path: "ip-management",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <IPManagementPage />
                </Suspense>
            ),
        },
    ],
};

export default SecurityRouter;
