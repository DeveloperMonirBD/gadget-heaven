import { useNavigate } from 'react-router-dom';
import bannerImg from '../../src/assets/banner.jpg';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="border border-[#9538E2] p-1 rounded-3xl mt-2 relative mb-36 md:mb-52 lg:mb-80">
                <div className="hero bg-[#9538E2] rounded-3xl text-gray-100 min-h-[450px] flex justify-center items-start pt-[86px]">
                    <div className="text-center z-10 mt-2 md:mt-0">
                        <div className="max-w-md px-10 lg:px-0 md:max-w-xl">
                            <h1 className="text-2xl md:text-3xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-3 pt-4 pb-5 text-sm md:text-md lg:px-10">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button
                                onClick={() => navigate('products')}
                                className="px-8 py-3 bg-white rounded-full text-[#9538E2] text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" w-[330px] md:w-[650px] lg:w-[1000px] absolute top-[355px] md:top-[310px] left-1/2 transform -translate-x-1/2   border border-gray-200 rounded-3xl p-2">
                    <img className="w-full max-h-[200px] md:max-h-[300px] lg:max-h-[400px] object-cover rounded-3xl" src={bannerImg} alt="Banner" />
                </div>
            </div>
        </>
    );
};

export default Banner;
