
import { Outlet } from 'react-router-dom';
import Heading from '../components/Heading';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {


    return (
        <div className="mb-20">
            <Helmet>
                <title>Gadget Haven | Dashboard</title>
            </Helmet>
            {/* heading */}
            <Heading
                headingTitle={'Dashboard'}
                headingDescription={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
