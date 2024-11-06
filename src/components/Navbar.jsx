import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link, NavLink, useLocation} from 'react-router-dom';
import { getAllFavourites } from '../utils';

const Navbar = () => {

    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const favorites = getAllFavourites();
        setProducts(favorites);
    }, []);

    useEffect(() => {
        calculateTotalCost(products);
    }, [products])
    
    const calculateTotalCost = (products) => {
        const total = products.reduce((acc, product) => acc + product.price, 0)
        setTotalCost(total);
    }

    // Determine the current path
    const isHomePage = location.pathname === '/';
    const navbarBgClass = isHomePage ? 'text-white absolute left-0 right-0' : 'bg-white text-gray-500 z-50';

    const links = (
        <>
            <li>
                <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-900' : 'hover:text-purple-900'}`} to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-900' : 'hover:text-purple-900'}`} to="/products">
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-900' : 'hover:text-purple-900'}`} to="/statistics">
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-900' : 'hover:text-purple-900'}`} to="/dashboard">
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`navbar max-w-7xl mx-auto px-12 ${navbarBgClass} z-50 mt-4`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-200 text-purple-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-semibold gap-2">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl font-semibold">
                    Gadget Heaven
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-base font-semibold">{links}</ul>
            </div>

            <div className="navbar-end space-x-1">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">{products.length}</span>
                        </div>
                    </div>

                    <div tabIndex={0} className="card card-compact dropdown-content bg-base-200 text-purple-600 mt-3 w-52 shadow z-50">
                        <div className="card-body">
                            <span className="text-lg font-bold">{products.length} Items</span>
                            <span className="text-purple-500">Subtotal: ${totalCost}</span>
                            <div className="card-actions">
                                <Link to="dashboard" className="btn bg-purple-600 text-white btn-block text-lg">
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator text-2xl">
                            <FaRegHeart />
                            <span className="badge badge-sm indicator-item">{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
