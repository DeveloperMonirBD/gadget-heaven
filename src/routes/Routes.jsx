import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ProductDetails from "../pages/ProductDetails";
import ErrorElement from "../pages/ErrorElement";
import ProductCards from "../components/ProductCards";
import Products from "../pages/Products";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <ProductCards />,
                        loader: () => fetch('../products.json')
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCards />,
                        loader: () => fetch('../products.json')
                    }
                ]
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetch('../products.json')
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                loader: () => fetch('../products.json')
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: () => fetch('../products.json')
            }
        ]
    }
]);

export default routes;
