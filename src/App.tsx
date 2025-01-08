import {RouterProvider} from "react-router-dom";
import MainRouter from "@/routers/MainRouter.tsx";

export default function Page() {
    return (
        <>
            <RouterProvider router={MainRouter}/>
        </>
    )
}