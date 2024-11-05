
/* eslint-disable react/prop-types */

const Heading = ({headingTitle, headingDescription }) => {


    return (
        <>
            <div className="bg-[#9538E2] text-white pt-4 pb-10 rounded-t-3xl mt-8 px-8 md:px-20 lg:px-32">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">{headingTitle}</h1>
                        <p className="pt-4 pb-2">{headingDescription}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center text-white">
                    <div className="space-x-4">
                        <button className="px-10 py-3 bg-white rounded-full text-[#9538E2] text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1">Cart</button>
                        <button className="px-10 py-3 bg-white rounded-full text-[#9538E2] text-lg font-bold hover:bg-purple-600 hover:text-white transition outline outline-1">Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Heading;