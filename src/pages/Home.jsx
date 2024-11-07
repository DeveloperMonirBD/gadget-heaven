import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Gadget Haven | Home</title>
            </Helmet>

            {/* Banner  */}
            <Banner />

            <div>
                <h2 className="text-center mb-12 lg:mb-14 text-2xl md:text-3xl lg:text-4xl font-bold">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-12 gap-8 mb-20">
                    {/* Categories tab section  */}
                    <Categories categories={categories} />

                    {/* Dynamic Nested Component  */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
