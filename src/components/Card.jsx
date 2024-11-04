/* eslint-disable react/prop-types */

const Card = ({ product }) => {
    const {product_image, product_title, price } = product || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-10 h-[250px]">
                <img src={product_image} alt="Shoes" className="rounded-xl w-full h-full object-cover" />
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