import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';

const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const singleData = data.find(product => product.id === id);
        setProduct(singleData);
    }, [data, id]);

    const { product_image, product_title, price, availability, description, specification, rating } = product;

    return (
        <div className="pb-[620px] md:pb-36 lg:pb-20">
            <div className="border border-[#9538E2] p-1 rounded-3xl mt-6 relative mb-36 md:mb-52 lg:mb-80">
                <div className="hero bg-[#9538E2] rounded-3xl text-gray-100 min-h-[300px] md:min-h-[280px]  lg:min-h-[350px] flex justify-center items-start pt-6">
                    <div className="text-center z-10 mt-2 md:mt-0">
                        <div className="max-w-md px-10 lg:px-0 md:max-w-xl">
                            <h1 className="text-2xl md:text-3xl font-bold pt-4">Product Details</h1>
                            <p className="py-3 pb-5 text-sm md:text-md lg:px-10">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                        </div>
                    </div>
                </div>

                {/* details Card  */}
                <div className="w-[350px] md:w-[650px] lg:w-[1000px] absolute top-[190px] md:top-[155px] left-1/2 transform -translate-x-1/2 border border-gray-200 rounded-3xl px-4 md:p-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 bg-base-100 rounded-3xl mt-4 items-center">
                        <div className="w-full py-10 md:pl-8 rounded-l-3xl">
                            <img className="w-full rounded-md" src={product_image} alt={product_title} />
                        </div>

                        <div className="py-10 space-y-2">
                            <h2 className="text-xl font-bold">{product_title}</h2>
                            <p className="font-semibold">${price}</p>
                            <div className="text-sm badge badge-success badge-outline">{availability ? 'In Stock' : 'Out of Stock'}</div>
                            <p className="text-gray-500">{description}</p>
                            <div>
                                <p className="font-bold">Specification :</p>
                                <ul className="text-gray-600">
                                    {specification &&
                                        specification.map((item, i) => (
                                            <li className="list-decimal list-inside" key={i}>
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <h3 className="font-bold">Rating</h3>

                            {/* reting  */}
                            <div className="flex items-center md:gap-4 md:pt-1">
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map(value => (
                                        <input key={value} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={rating >= value} readOnly />
                                    ))}
                                </div>
                                <div className="badge badge-success badge-outline">{rating}</div>
                            </div>

                            {/* card btn  */}

                            <div className="flex items-center gap-2 pt-3">
                                <button className=" btn bg-purple-500 text-white hover:text-purple-600 flex items-center rounded-full">
                                    Add To Card{' '}
                                    <span className="text-xl">
                                        <IoCartOutline />
                                    </span>
                                </button>

                                <div role="button" className="btn btn-circle">
                                    <div className="indicator text-xl hover:text-purple-600">
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
