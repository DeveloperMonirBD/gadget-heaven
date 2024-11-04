import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
    const [products, setProducts] = useState([])
    const data = useLoaderData()
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(product => product.category === category);

            setProducts(filteredByCategory);
        } else {
            // setProducts(data.slice(0, 6))
            setProducts(data);
       }
    }, [category, data])

    return (
        <div id="card-container" className="grid col-span-12 md:col-span-12 lg:col-span-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative">
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCards;