import bannerImg from '../../src/assets/banner.jpg'
const Banner = () => {
    return (
        <>
            <div className="border border-[#9538E2] p-1 mt-2 rounded-3xl">
                <div className="hero bg-[#9538E2]  rounded-3xl text-gray-100 min-h-[450px] flex justify-center items-start pt-24">
                    <div className="text-center ">
                        <div className="max-w-md px-10 lg:px-0 md:max-w-xl">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-3 pt-4 pb-5 text-sm md:text-md lg:px-10">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button className="px-4 py-1 bg-white rounded-full text-[#9538E2] text-lg font-bold">Shop Now</button>
                            <div className="absolute"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative -top-24 md:-top-36 left-[11%] md:left-24 lg:left-36 max-w-[300px] md:max-w-[550px] lg:max-w-[950px] border border-gray-200 rounded-3xl p-2">
                <img className="w-full lg:h-[450px] object-cover rounded-3xl" src={bannerImg} alt="" />
            </div>
        </>
    );
};

export default Banner;