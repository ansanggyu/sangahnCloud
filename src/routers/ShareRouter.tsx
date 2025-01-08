import { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const QRCodePage = lazy(() => import("@/pages/fileshare/QRCodePage.tsx"));
const ExpiryLinkPage = lazy(() => import("@/pages/fileshare/ExpiryLinkPage.tsx"));

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
    ],
};

export default ShareRouter;
