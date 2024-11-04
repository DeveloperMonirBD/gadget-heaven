/* eslint-disable react/prop-types */

const Card = ({ product }) => {
    const {product_image, product_title, price } = product || {};
    return (
        <div className="card bg-base-100 shadow-2xl border transition hover:scale-105">
            <figure className="h-[180px] pt-6 px-2">
                <img src={product_image} alt={product_title} className=" w-full h-full object-cover" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{product_title}</h2>
                <p className="text-xl">{price}💲</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-purple-600 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;