import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";

const Products = () => {
    const data = useLoaderData();

    return (
        <>
            <Heading
                data={data}
                headingTitle={'All Products'}
                headingDescription={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />
        </>
    );
};

export default Products;