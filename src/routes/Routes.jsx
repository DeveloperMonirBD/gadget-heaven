import { createBrowserRouter } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import ProductCards from '../components/ProductCards';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import ErrorElement from '../pages/ErrorElement';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
import Statistics from '../pages/Statistics';
import WishList from '../components/WishList';

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
                        path: '',
                        element: <ProductCards />,
                        loader: () => fetch('../products.json')
                    },
                    {
                        path: 'category/:category',
                        element: <ProductCards />,
                        loader: () => fetch('../products.json')
                    }
                ]
            },
            {
                path: 'products',
                element: <Products />,
                loader: () => fetch('../products.json')
            },
            {
                path: 'statistics',
                element: <Statistics />
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                loader: () => fetch('../products.json'),
                children: [
                    {
                        path: '',
                        element: <AddToCart />
                    },
                    {
                        path: 'add-to-cart',
                        element: <AddToCart />
                    },
                    {
                        path: 'wishlist',
                        element: <WishList />
                    }
                ]
            },
            {
                path: 'product/:id',
                element: <ProductDetails />,
                loader: () => fetch('../products.json')
            }
        ]
    }
]);

export default routes;
