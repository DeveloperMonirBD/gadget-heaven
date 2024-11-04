/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";


const Categories = ({ categories }) => {

    // const navigate = useNavigate()
    
    return (
        <div className="col-span-12 lg:col-span-3 w-full  gap-6 py-10 px-6 border shadow-xl rounded-xl ">
            <div id="petImageContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-8 lg:gap-4">
                {/* All Product btn  */}

                {/* <button onClick={() => navigate('/products')} className="px-6 py-6 bg-purple-600 text-white active rounded-3xl text-lg text-center  font-semibold hover:bg-gray-300 transition">
                    All Products
                </button> */}

                {categories.map(category => (
                    <NavLink
                        key={category.category}
                        to={`/category/${category.category}`}
                        className={({ isActive }) =>
                            `px-6 py-6 bg-gray-200 text-gray-600 rounded-3xl text-lg text-center  font-semibold hover:bg-gray-300 transition ${
                                isActive ? 'bg-purple-600 text-white' : 'transition hover:scale-105 hover:text-purple-600 '
                            }`
                        }>
                        {category.category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;