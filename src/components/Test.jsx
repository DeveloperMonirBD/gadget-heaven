import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { useState } from 'react';
import Heading from '../components/Heading';

const Products = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState(data);
    const [isAscending, setIsisAscending] = useState(true);

    const handleSort = () => {
       const sorted = [...data].sort((a, b) => isAscending ? a.price - b.price : b.price - a.price);
        setProducts(sorted);
        setIsisAscending(!isAscending)
    }

    return (
        <>
            <div className="bg-[#9538E2] text-white pt-4 pb-10 rounded-t-3xl mt-12 px-8 md:px-20 lg:px-32">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-semibold">All Products</h1>
                        <p className="py-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>

                <div className="flex justify-between items-center text-white">
                    <div>
                        <h1 className="hidden md:flex text-xl font-thin">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
                    </div>

                    <div className="space-x-4">
                        <button onClick={handleSort} className="btn text-purple-600">
                            Sort By Price ({isAscending ? 'ASC' : 'DSC'})
                        </button>
                    </div>
                </div>
            </div>
            <Heading
                data={data}
                headingTitle={'All Products'}
                headingDescription={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />

            <div id="card-container" className="grid col-span-12 md:col-span-12 lg:col-span-9 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6 mb-20">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;
