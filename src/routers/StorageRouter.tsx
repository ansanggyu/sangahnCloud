import { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const StorageVolumePage = lazy(() => import("../pages/storage/StorageVolumePage.tsx"));

const StorageRouter = {
    path: "/storage",
    children: [
        {
            path: "volume",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <StorageVolumePage />
                </Suspense>
            ),
        },
    ],
};

export default StorageRouter;
