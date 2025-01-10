import { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const QRCodePage = lazy(() => import("../pages/fileshare/QRCodePage.tsx"));
const ExpiryLinkPage = lazy(() => import("../pages/fileshare/ExpiryLinkPage.tsx"));
const DownloadLimitPage = lazy(() => import("../pages/fileshare/DownloadLimitPage.tsx"))

const ShareRouter = {
    path: "/share",
    children: [
        {
            path: "qr-code",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <QRCodePage />
                </Suspense>
            ),
        },
        {
            path: "expiry-link",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <ExpiryLinkPage />
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
    ],
};

export default ShareRouter;
