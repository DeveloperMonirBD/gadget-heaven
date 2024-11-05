/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, product_image, product_title, price } = product || {};

    return (
        <div className="card bg-base-100 shadow-2xl border p-6 lg:p-4  transition hover:scale-105">
            <figure className="h-[180px]  ">
                <img src={product_image} alt={product_title} className=" w-full h-full object-cover" />
            </figure>
            <div className="mt-2 p-2 flex flex-col justify-between flex-grow items-start gap-3">
                <div className="space-y-2">
                    <h2 className="card-title">{product_title}</h2>
                    <p className="text-xl text-gray-500">${price}</p>
                </div>

                <Link to={`/product/${id}`} className="px-4 py-3 bg-white rounded-xl text-[#9538E2] text-base font-bold hover:bg-purple-600 hover:text-white transition outline outline-1">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Card;
