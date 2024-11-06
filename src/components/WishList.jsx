import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getAllWishlists, removeWishCard } from '../utils/wish';

const WishList = () => {
    const navigate = useNavigate();
    const [wishCard, setWishCard] = useState([]);

    useEffect(() => {
        const wishCards = getAllWishlists();
        setWishCard(wishCards);
    }, []);

    const handleRemoved = id => {
        // Remove product from favorites in localStorage
        removeWishCard(id);
        // Re-fetch the updated list from localStorage
        const wishCards = getAllWishlists();
        setWishCard(wishCards);
    };

    return (
        <>
            {/* selected button */}
            <div className="mt-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-between items-center mb-10 px-6">
                    <div className="flex w-full lg:w-[700px] justify-between">
                        <p className="font-bold text-lg">Wishlist</p>
                    </div>
                </div>

                {/* selected card */}
                {wishCard.map(({ id, product_image, product_title, description, price }) => (
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
                ))}

                <button
                    onClick={() => navigate('/products')}
                    className="px-8 py-4 bg-white rounded-full text-[#9538E2] md:text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1 mt-4">
                    Add More Products
                </button>
            </div>
        </>
    );
};

export default WishList;
