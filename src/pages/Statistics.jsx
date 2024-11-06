
import { BarChart, Bar } from 'recharts';

const data = [
    { name: 'Dell XPS 13', rating: 3.5 },
    { name: 'MacBook Pro 16', rating: 5 },
    { name: 'HP Spectre x360', rating: 4.6 },
    { name: 'Asus ROG Zephyrus', rating: 4.7 },
    { name: 'Lenovo ThinkPad X1 Carbon', rating: 4.5 },
    { name: 'Microsoft Surface Laptop 4', rating: 4.6 },
    { name: 'iPhone 13 Pro', rating: 4.8 },
    { name: 'Samsung Galaxy S21', rating: 4.6 },
    { name: 'Apple Watch Series 7', rating: 4.7 },
    { name: 'Samsung Galaxy Watch 4', rating: 4.5 }
];


const Statistics = () => {
    return (
        <>
            <div className="mb-24">
                <div className="bg-[#9538E2] text-white pt-4 pb-10 rounded-t-3xl mt-8 px-8 md:px-20 lg:px-32">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-4xl font-bold">Statistics</h1>
                            <p className="pt-4 pb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <BarChart width={350} height={300} data={data} barSize={25}>
                        <Bar dataKey="rating" fill="#9538E2" />
                    </BarChart>
                    <h2 className='text-xl font-bold mt-4 text-purple-700'>Statistics by Product Rating</h2>
                </div>
            </div>
        </>
    );
};

export default Statistics;