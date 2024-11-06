import { useEffect, useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import groupImg from '../../src/assets/Group.png';
import { getAllFavourites, removeFavorite } from '../utils';
import toast from 'react-hot-toast';

const AddToCart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch favorites from localStorage initially
        const favorites = getAllFavourites();
        setProducts(favorites);
    }, []);

    useEffect(() => {
        calculateTotalCost(products);
    }, [products]);

    const handleRemoved = id => {
        // Remove product from favorites in localStorage
        removeFavorite(id);
        // Re-fetch the updated list from localStorage
        const favorites = getAllFavourites();
        setProducts(favorites);
    };

    const calculateTotalCost = products => {
        const total = products.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(total);
    };

    const handleSort = () => {
        const sorted = [...products].sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
        setProducts(sorted);
        setIsAscending(!isAscending);
    };

    const handlePurchaseClick = () => {
        // Clear products from both state and localStorage
        localStorage.removeItem('favourites'); // Assuming 'favourites' is the key used in localStorage
        setShowModal(true); // Show success modal
    };

    const handleCloseModal = () => {
        setProducts([]); // Reset state
        setTotalCost(0); // Reset total cost
        setShowModal(false);
        toast.success('Congratulation Purchase Successfully!');
    };

    return (
        <>
            {/* selected button */}
            <div className={`mt-8 ${showModal ? 'mt-0' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-between items-center mb-10 px-6">
                    <div className="flex w-full lg:w-[700px] justify-between">
                        <p className="font-bold text-xl">Cart</p>
                        <p className="font-bold text-lg">Total cost: ${totalCost.toFixed(2)}</p>
                    </div>

                    <div className="space-x-2 flex md:justify-end w-full lg:w-[500px] gap-2 items-center text-sm md:text-lg font-bold">
                        <button
                            onClick={handleSort}
                            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[#9538E2] hover:bg-purple-600 hover:text-white transition outline outline-1">
                            Sort By Price ({isAscending ? 'ASC' : 'DSC'})
                            <span>
                                <GiSettingsKnobs />
                            </span>
                        </button>

                        <button
                            onClick={handlePurchaseClick}
                            className="px-8 py-3 text-white rounded-full bg-[#9538E2] md:text-lg font-bold hover:bg-white hover:text-purple-800 transition outline outline-1">
                            Purchase
                        </button>
                    </div>
                </div>

                {/* selected card */}
                {products.length > 0 ? (
                    products.map(({ id, product_image, product_title, description, price }) => (
                        <div key={id} className="flex items-center justify-between border p-2 md:p-6 rounded-2xl mb-6 shadow-md">
                            <div className="flex items-center gap-4 md:gap-10">
                                <div className="w-24 md:w-36">
                                    <img className="w-full object-cover" src={product_image} alt={product_title} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="md:text-2xl font-semibold md:font-bold">{product_title}</h3>
                                    <p className="md:text-base">{description}</p>
                                    <p className="text-base font-semibold">${price}</p>
                                </div>
                            </div>
                            <button onClick={() => handleRemoved(id)} className="text-2xl md:text-4xl text-red-500 ml-2 mr-3 transition hover:scale-110">
                                <MdClose />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-2xl font-semibold text-purple-800 my-20">Your Cart is empty</p>
                )}

                <button
                    onClick={() => navigate('/products')}
                    className="px-8 py-4 bg-white rounded-full text-[#9538E2] md:text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1 mt-4">
                    Add More Products
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col text-center justify-center">
                        <div className="flex justify-center mb-3 mt-2">
                            <img className="w-10" src={groupImg} alt="" />
                        </div>
                        <h2 className="text-xl font-bold border-b pb-3">Payment Successfully</h2>
                        <p className="text-sm mt-3 text-gray-500">Thanks for purchasing.</p>
                        <p className="text-sm mb-4">
                            <span className="text-gray-600">Total:</span> ${totalCost.toFixed(2)}
                        </p>
                        <button onClick={handleCloseModal} className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddToCart;
