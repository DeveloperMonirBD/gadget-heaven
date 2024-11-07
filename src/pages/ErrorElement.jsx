import { Helmet } from 'react-helmet-async';
import errorImg from '../../src/assets/error.webp';

const ErrorElement = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-8 mt-32">
            <Helmet>
                <title>Gadget Haven | Error</title>
            </Helmet>

            <div>
                <img src={errorImg} alt="" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold">No Information Available</h2>
        </div>
    );
};

export default ErrorElement;
