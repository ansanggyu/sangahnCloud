import { lazy, Suspense } from "react";

const LoadingPage = lazy(() => import("../pages/common/LoadingPage.tsx"));
const TrashPage = lazy(() => import("../pages/trash/TrashPage.tsx"));

const TrashRouter = {
    path: "/trash",
    children: [
        {
            path: "",
            element: (
                <Suspense fallback={<LoadingPage />}>
                    <TrashPage />
                </Suspense>
            ),
        },
    ],
};

export default TrashRouter;
