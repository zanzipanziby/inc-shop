import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../page/MainPage";
import {ProductPage} from "../page/ProductPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/product/:productId",
        element: <ProductPage/>
    }
]);