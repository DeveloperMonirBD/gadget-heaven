import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { GiSettingsKnobs } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllFavourites, removeFavorite } from '../utils';

const Dashboard = () => {
    // const { pathname } = useLocation();
    // console.log(pathname);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const favorites = getAllFavourites()
        setProducts(favorites);
    }, [])


    const handleRemoved = (id) => {
        removeFavorite(id)
        const favorites = getAllFavourites();
        setProducts(favorites);
    }


    return (
        <div className="mb-20">
            {/* heading  */}
            <div>
                <Heading
                    headingTitle={'Dashboard'}
                    headingDescription={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                />
            </div>

            {/* selected button  */}
            <div className="mt-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-between items-center mb-10 px-6">
                    <div className="flex w-full lg:w-[700px] justify-between">
                        <p className="font-bold text-lg">Cart</p>
                        <p className="font-bold text-lg">Total cost: $999.99</p>
                    </div>

                    <div className="font-bold space-x-2 flex md:justify-end md:w-full lg:w-[400px] gap-2 items-center">
                        <button className="flex items-center gap-2 px-8 py-3 bg-white rounded-full text-[#9538E2] md:text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1">
                            Sort by Price
                            <span>
                                <GiSettingsKnobs />
                            </span>
                        </button>

                        <button className="px-8 py-3 bg-white rounded-full text-[#9538E2] md:text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1">Purchase</button>
                    </div>
                </div>

                {/* selected card  */}
                {products.map(({ id, product_image, product_title, description, price }) => (
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
        </div>
    );
};

export default Dashboard;
